function speak(value: string): string {
    document.write(value);
    return value;
}

var greeted = "World";
var greeting = "Hello ";
var whatToSay: string = greeting.toString() + greeted;

speak(whatToSay);

// Computed Property example:
const osPrefix = 'os_';

var support = {
    [osPrefix + 'Windows']: isSupported('Windows'),
    [osPrefix + 'iOS']: isSupported('iOS'),
    [osPrefix + 'Android']: isSupported('Android')
}

function isSupported(os) {
    return Math.random() >= 0.5;
}

// Type inference - TS infers function return values

var animal = {
    name: "Fido",
    species: "Dog",
    age: calculateAge(2010),
    speak: function() {
        console.log('Woof!');
    }
}

function calculateAge(birthYear) {
    return Date.now() - birthYear;
}

function totalLength(x, y) {
    let total = x.length + y.length;
    return total;
}