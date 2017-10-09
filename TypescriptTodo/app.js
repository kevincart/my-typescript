var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.prototype.add = function (todo) {
        var newId = TodoService.getNextId();
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.getNextId = function () {
        return TodoService.lastId += 1;
    };
    TodoService.lastId = 0;
    return TodoService;
}());
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
};
var SmartTodo = /** @class */ (function () {
    function SmartTodo(name) {
        this.name = name;
    }
    Object.defineProperty(SmartTodo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == TodoState.Complete) {
                var canBeCompleted = this.state == TodoState.Active
                    || this.state == TodoState.Deleted;
                if (!canBeCompleted) {
                    throw "Todo must be Active or Deleted in order to be marked Completed";
                }
            }
            this._state = newState;
        },
        enumerable: true,
        configurable: true
    });
    return SmartTodo;
}());
var smartTodo = new SmartTodo("Alpha");
console.log("At the very end of TS todo!");
console.log(smartTodo);
