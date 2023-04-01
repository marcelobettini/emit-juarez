let todoArr: Todo[] = [];
const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", (e) => handleForm(e));
const tasksContainer = document.getElementById("tasks-container") as HTMLDivElement;

const handleForm = (e: Event) => {
  e.preventDefault();
  const formData: FormData = new FormData(form);
  const description: string = formData.get("description")?.toString()!;
  const newTodo: Todo = new Todo(description);
  todoArr = [...todoArr, newTodo];
  DOM.renderData();
  DOM.inputReset();


};

class Todo {
  id: string;
  description: string;
  public constructor(description: string) {
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
  };
  static inputReset() {
    form.reset();
  }
}