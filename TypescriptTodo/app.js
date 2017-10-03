var container = document.getElementById('container');
var todo = {
    id: 123,
    name: "Pick up drycleaning",
    completed: true
};
container.innerHTML = "\n<div todo='" + todo.id + "' class=\"list-group-item}\">\n<i class=\"" + (todo.completed ? " " : "hidden") + " text-success glyphicon glyphicon-ok\"></i>\n<span class=\"name\">" + todo.name + "</span>\n</div>\n";
// Destructuring example
var array = [123, "Pick up drycleaning", false];
var id = array[0], title = array[1], completed = array[2];
// Another destructuring example
var a = 1;
var b = 5;
_a = [b, a], a = _a[0], b = _a[1]; // reverses values
// Computed Property example:
var osPrefix = 'os_';
var support = (_b = {},
    _b[osPrefix + 'Windows'] = isSupported('Windows'),
    _b[osPrefix + 'iOS'] = isSupported('iOS'),
    _b[osPrefix + 'Android'] = isSupported('Android'),
    _b);
function isSupported(os) {
    return Math.random() >= 0.5;
}
var _a, _b;
