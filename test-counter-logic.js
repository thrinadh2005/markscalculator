// Test visitor counter logic
console.log('=== Visitor Counter Test ===');

// Test 1: Check initial state
console.log('Test 1: Initial state');
let storedCount = localStorage.getItem('site_visitors');
let lastVisitDate = localStorage.getItem('last_visit_date');
const today = new Date().toDateString();

console.log('Stored count:', storedCount);
console.log('Last visit date:', lastVisitDate);
console.log('Today:', today);
console.log('Is new day:', lastVisitDate !== today);

// Test 2: Simulate counter logic
console.log('\nTest 2: Simulate counter logic');
let count = storedCount ? parseInt(storedCount) : 1024;

if (lastVisitDate !== today) {
    count = 1024; // Reset to base count for new day
    localStorage.setItem('site_visitors', count.toString());
    localStorage.setItem('last_visit_date', today);
    console.log('New day detected, counter reset to base count:', count);
} else {
    // Increment local count for today
    count += 1;
    localStorage.setItem('site_visitors', count.toString());
    console.log('Same day, incremented count to:', count);
}

console.log('Final count:', count);
console.log('Formatted count:', count.toLocaleString());

// Test 3: Check localStorage after update
console.log('\nTest 3: Check localStorage after update');
console.log('Updated stored count:', localStorage.getItem('site_visitors'));
console.log('Updated last visit date:', localStorage.getItem('last_visit_date'));

console.log('\n=== Test Complete ===');
