class abc {
    constructor() {
        this.messages = [];
        this.todoList = [];
    }
    addMessage(message) {
        this.messages.push(message);
    }
    showMessage() {
        this.messages.forEach(message => {
            console.log(message);
        });
    }
    showTodoList() {
        this.todoList.forEach(todo => {
            console.log(todo);
        });
    }
}

(function () {
    const abcInst = new abc();
    abcInst.showMessage();
})();
