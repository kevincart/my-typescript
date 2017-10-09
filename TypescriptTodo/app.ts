class TodoService {

    static lastId = 0;

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }

    getAll() {
        return this.todos;
    }

    static getNextId() {
        return TodoService.lastId += 1;
    }
}

interface Todo {
    name: string;
    state: TodoState;
}

var todo: Todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

class SmartTodo {
    _state: TodoState;
    name: string;

    get state() {
        return this._state;
    }

    set state(newState) {
        
        if(newState == TodoState.Complete) {

            var canBeCompleted =
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;
            
            if(!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed"
            }
        }
        
        this._state = newState;
    }

    constructor(name: string) {
        this.name = name;
    }
}