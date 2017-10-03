var container = document.getElementById('container');

var todo = {
    id: 123,
    name: "Pick up drycleaning",
    completed: true
}

container.innerHTML = `
<div todo='${todo.id}' class="list-group-item}">
<i class="${ todo.completed ? " ": "hidden"} text-success glyphicon glyphicon-ok"></i>
<span class="name">${ todo.name }</span>
</div>
`

// Destructuring example
var array = [123, "Pick up drycleaning", false];
var [id, title, completed] = array;

// Another destructuring example
var a = 1;
var b = 5;

[a,b] = [b,a]; // reverses values

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