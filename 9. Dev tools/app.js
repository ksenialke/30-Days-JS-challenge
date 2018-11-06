const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hi!');
// Interpolated
console.log('Hi I am a %s string', 'dumb');
// Styled
console.log('%c I am some great text', 'font-size: 50px');
console.log('%c I am some great text', 'background:red; text-shadow: 10px 10px 0 blue');
// warning!
console.warn('oh noooo :<');
// Error :|
console.error('shit you blew this')
// Info
console.info('insert fun fact ');
// Testing
console.assert(1===1, 'that is wrong'); // will fire if sth is wrong
// clearing
console.clear()
// Viewing DOM Elements

// console.dir(p);

// Grouping together

// counting

// timing
