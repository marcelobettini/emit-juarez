"use strict";
let todoArr = [];
const form = document.querySelector("form");
form.addEventListener("submit", (e) => handleForm(e));
const tasksContainer = document.getElementById("tasks-container");
const handleForm = (e) => {
    var _a;
    e.preventDefault();
    const formData = new FormData(form);
    const description = (_a = formData.get("description")) === null || _a === void 0 ? void 0 : _a.toString();
    const newTodo = new Todo(description);
    todoArr = [...todoArr, newTodo];
    DOM.renderData();
    DOM.inputReset();
};
class Todo {
    constructor(description) {
        this.id = Math.random().toString().substring(2, 10);
        this.description = description;
    }
}
class DOM {
    static renderData() {
        let displayData = todoArr.map(todo => {
            return `
      <div><p>${todo.description}<i class="las la-trash"></i></p></div>
      `;
        });
        tasksContainer.innerHTML = displayData.join("");
    }
    ;
    static inputReset() {
        form.reset();
    }
}
