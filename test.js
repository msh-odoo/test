class abc {
    constructor() {
        this.messages = [];
    }
    addMessage(message) {
        this.messages.push(message);
    }
    showMessage() {
        this.messages.forEach(message => {
            console.log(message);
        });
    }
}

(function () {
    const abcInst = new abc("Hello World");
    abcInst.showMessage();
})();
