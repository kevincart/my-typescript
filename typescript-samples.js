function speak(value) {
    document.write(value);
    return value;
}
var greeted = "World";
var greeting = "Hello ";
var whatToSay = greeting.toString() + greeted;
speak(whatToSay);
