class abc {
    constructor(message) {
        this.message = message;
    }
    showMessage() {
        console.log(this.message);
    }
}

(function () {
    const abcInst = new abc("Hello World");
    abcInst.showMessage();
})();
