/**
 * GMRIT Academic Calculator - Web Push Notification Manager
 * Handles client subscriptions, VAPID registration, and Admin Broadcasts
 */

const PushManagerHelper = {
    VAPID_PUBLIC_KEY: 'BIP3cUVnS-KEqF_pw-Ff8LTWLz5LPAYcxVdJnVz9NBu4_fJ_nbHnlyyHYpWhL6F0YRGUqH8HUcvXlomKdmJlkS0',
    
    // Check if push notifications are supported
    isSupported() {
        return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
    },

    // Convert Base64 URL string to Uint8Array for VAPID applicationServerKey
    urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    },

    // Initialize and check current status
    async init() {
        if (!this.isSupported()) {
            console.log('[Push] Push notifications not supported by browser.');
            const notifBtn = document.getElementById('navbar-notif-btn');
            if (notifBtn) notifBtn.style.display = 'none';
            return;
        }

        this.updateUiState();

        // If permission is already granted, ensure subscription is synced
        if (Notification.permission === 'granted') {
            this.ensureSubscribed();
        } else if (Notification.permission === 'default') {
            // Show subtle notification prompt after 5 seconds if not yet prompted
            setTimeout(() => {
                const hasPrompted = localStorage.getItem('gmrit_notif_prompted');
                if (!hasPrompted) {
                    this.showNotificationBanner();
                }
            }, 5000);
        }
    },

    // Update UI buttons based on permission
    updateUiState() {
        const notifBtn = document.getElementById('navbar-notif-btn');
        const notifBadge = document.getElementById('notif-status-badge');
        
        if (!notifBtn) return;

        if (Notification.permission === 'granted') {
            notifBtn.setAttribute('title', 'Notifications Enabled (Tap to Manage)');
            if (notifBadge) {
                notifBadge.className = 'badge bg-success';
                notifBadge.textContent = 'Active';
            }
        } else if (Notification.permission === 'denied') {
            notifBtn.setAttribute('title', 'Notifications Blocked in Browser Settings');
            if (notifBadge) {
                notifBadge.className = 'badge bg-danger';
                notifBadge.textContent = 'Blocked';
            }
        } else {
            notifBtn.setAttribute('title', 'Enable Push Notifications');
            if (notifBadge) {
                notifBadge.className = 'badge bg-secondary';
                notifBadge.textContent = 'Enable';
            }
        }
    },

    // Show friendly opt-in banner
    showNotificationBanner() {
        const banner = document.getElementById('notif-optin-banner');
        if (banner) {
            banner.classList.remove('hidden');
            lucide.createIcons();
        }
    },

    // Dismiss banner
    dismissNotificationBanner() {
        const banner = document.getElementById('notif-optin-banner');
        if (banner) {
            banner.classList.add('hidden');
        }
        localStorage.setItem('gmrit_notif_prompted', 'true');
    },

    // Request permission and subscribe
    async subscribeUser() {
        if (!this.isSupported()) {
            alert('Push notifications are not supported by your browser or device.');
            return false;
        }

        try {
            const permission = await Notification.requestPermission();
            this.updateUiState();

            if (permission !== 'granted') {
                console.log('[Push] Notification permission was:', permission);
                if (permission === 'denied') {
                    alert('Notifications are blocked in your browser settings. Please unblock notifications in site settings to receive updates.');
                }
                return false;
            }

            // Get active service worker registration
            const registration = await navigator.serviceWorker.ready;
            
            // Check existing subscription
            let subscription = await registration.pushManager.getSubscription();

            if (!subscription) {
                const convertedVapidKey = this.urlBase64ToUint8Array(this.VAPID_PUBLIC_KEY);
                subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey
                });
                console.log('[Push] New subscription created:', subscription);
            }

            // Send subscription to backend database
            const userName = localStorage.getItem('gmrit_user_name') || 'GMRIT Student';
            await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    subscription: subscription.toJSON(),
                    userName: userName,
                    device: navigator.userAgent
                })
            });

            this.dismissNotificationBanner();
            this.updateUiState();

            // Display a success toast
            if (typeof showToast === 'function') {
                showToast('🎉 Notifications enabled! You will receive instant exam & result updates.');
            } else {
                console.log('Push notifications enabled successfully!');
            }

            return true;
        } catch (error) {
            console.error('[Push] Failed to subscribe user:', error);
            alert('Could not enable notifications: ' + error.message);
            return false;
        }
    },

    // Sync existing subscription
    async ensureSubscribed() {
        try {
            const registration = await navigator.serviceWorker.ready;
            const subscription = await registration.pushManager.getSubscription();
            if (subscription) {
                const userName = localStorage.getItem('gmrit_user_name') || 'GMRIT Student';
                fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        subscription: subscription.toJSON(),
                        userName: userName,
                        device: navigator.userAgent
                    })
                }).catch(err => console.warn('[Push] Background sync error:', err));
            }
        } catch (err) {
            console.warn('[Push] Sync error:', err);
        }
    },

    // --- ADMIN BROADCAST FUNCTIONS ---
    async loadSubscriberStats() {
        try {
            const countEl = document.getElementById('admin-subscriber-count');
            if (countEl) countEl.textContent = 'Loading...';

            const res = await fetch('/api/subscribe');
            if (!res.ok) throw new Error('Failed to load stats');
            const data = await res.json();

            if (countEl) {
                countEl.textContent = data.totalSubscribers || 0;
            }
            return data;
        } catch (e) {
            console.error('[Push Admin] Error loading subscriber stats:', e);
            const countEl = document.getElementById('admin-subscriber-count');
            if (countEl) countEl.textContent = 'Error';
        }
    },

    async sendBroadcast() {
        const titleInput = document.getElementById('broadcast-title');
        const bodyInput = document.getElementById('broadcast-body');
        const urlInput = document.getElementById('broadcast-url');
        const btn = document.getElementById('broadcast-submit-btn');
        const resultDiv = document.getElementById('broadcast-result');

        const title = titleInput?.value.trim();
        const body = bodyInput?.value.trim();
        const url = urlInput?.value.trim() || '/';

        if (!title || !body) {
            alert('Please enter both a Notification Title and Message Body.');
            return;
        }

        const confirmSend = confirm(`Are you sure you want to broadcast this notification to ALL registered student devices?\n\nTitle: ${title}\nMessage: ${body}`);
        if (!confirmSend) return;

        if (btn) {
            btn.disabled = true;
            btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Broadcasting...`;
        }
        if (resultDiv) {
            resultDiv.className = 'alert alert-info py-2 px-3 small';
            resultDiv.textContent = 'Sending notification to devices across India...';
            resultDiv.classList.remove('hidden');
        }

        try {
            const res = await fetch('/api/send-notification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    url: url,
                    icon: '/icons/icon-512.png'
                })
            });

            const data = await res.json();

            if (res.ok && data.success) {
                if (resultDiv) {
                    resultDiv.className = 'alert alert-success py-2 px-3 small';
                    resultDiv.innerHTML = `<strong>✅ Success!</strong> Delivered to <b>${data.sent}</b> device(s). (Failed/Expired: ${data.failed})`;
                }
                titleInput.value = '';
                bodyInput.value = '';
                this.loadSubscriberStats();
            } else {
                throw new Error(data.message || data.error || 'Broadcast failed');
            }
        } catch (err) {
            console.error('[Push Admin] Broadcast error:', err);
            if (resultDiv) {
                resultDiv.className = 'alert alert-danger py-2 px-3 small';
                resultDiv.textContent = '❌ Failed: ' + err.message;
            }
        } finally {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = `<i data-lucide="send" style="width: 15px;"></i> Send Broadcast Notification`;
                lucide.createIcons();
            }
        }
    },

    // Preview updater
    updatePreview() {
        const titleInput = document.getElementById('broadcast-title');
        const bodyInput = document.getElementById('broadcast-body');
        const prevTitle = document.getElementById('preview-notif-title');
        const prevBody = document.getElementById('preview-notif-body');

        if (prevTitle && titleInput) {
            prevTitle.textContent = titleInput.value.trim() || 'GMRIT Marks Calculator';
        }
        if (prevBody && bodyInput) {
            prevBody.textContent = bodyInput.value.trim() || 'Notification message preview will appear here...';
        }
    }
};

// Initialize push manager on page load
window.addEventListener('DOMContentLoaded', () => {
    PushManagerHelper.init();
});
