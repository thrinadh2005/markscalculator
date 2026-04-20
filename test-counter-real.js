// Test script to check visitor counter functionality
// Run this in browser console to test

console.log('=== VISITOR COUNTER TEST ===');

// Test 1: Check if element exists
const counterEl = document.getElementById('visitor-count');
console.log('1. Counter element exists:', counterEl !== null);
if (counterEl) {
    console.log('   Current text:', counterEl.textContent);
    console.log('   Current color:', counterEl.style.color);
}

// Test 2: Check localStorage
console.log('2. LocalStorage check:');
console.log('   site_visitors:', localStorage.getItem('site_visitors'));
console.log('   last_visit_date:', localStorage.getItem('last_visit_date'));

// Test 3: Test date logic
const today = new Date().toDateString();
const lastVisitDate = localStorage.getItem('last_visit_date');
console.log('3. Date logic:');
console.log('   Today:', today);
console.log('   Last visit:', lastVisitDate);
console.log('   Is new day:', lastVisitDate !== today);

// Test 4: Simulate counter logic
let storedCount = localStorage.getItem('site_visitors');
let count = storedCount ? parseInt(storedCount) : 1024;

if (lastVisitDate !== today) {
    count = 1024;
    console.log('4. Counter logic: Would reset to', count);
} else {
    count += 1;
    console.log('4. Counter logic: Would increment to', count);
}

// Test 5: Check if updateVisitorCount function exists
console.log('5. Function exists:', typeof updateVisitorCount === 'function');

// Test 6: Manually test the counter update
if (typeof updateVisitorCount === 'function') {
    console.log('6. Testing counter update...');
    updateVisitorCount();
} else {
    console.log('6. Function not available');
}

console.log('=== TEST COMPLETE ===');
