function speak(value: string): string {
    document.write(value);
    return value;
}

var greeted = "World ";
var greeting = "Hello ";
var whatToSay: string = greeting.toString() + greeted;

speak(whatToSay);