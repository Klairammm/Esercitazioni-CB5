import { useState } from "react";
import { InputGroup } from "../../atoms/input-group/InputGroup";
import { TodoItem } from "../todo-item/TodoItem";

export function TodoList() {
  const [items, setItems] = useState([
    { label: "Fare la spesa", isDone: false },
  ]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formEl = event.target;
    const formData = new FormData(formEl);
    const label = formData.get("taskName");

    setItems((oldItems) => {
      const newItem = { label, isDone: false };
      return [...oldItems, newItem];
    });
  };

  const changeStatus = (index, currentStatus) => {
    console.log("cambiando lo stato", { items, setItems });
    console.log("elemento corrente:", index, items[index]);

    setItems((oldItems) => {
      const newItems = oldItems.concat([]);
      newItems[index].isDone = !currentStatus;
      return newItems;

      // return oldItems.map((oldItem,oldIndex) => {
      //     console.log(oldItem, oldItems)

      //     if(oldIndex === index){
      //         oldItem.isDone = !currentStatus;
      //     }

      //     return oldItem;
      // });
    });
  };

  return (
    <div>
      <h2>Todo list</h2>

      <form onSubmit={formSubmitHandler}>
        <InputGroup label={"Name task:"} name="taskName" />
      </form>

      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            isDone={item.isDone}
            changeStatus={changeStatus}
          >
            {item.label}
          </TodoItem>
        ))}
      </ul>
    </div>
  );
}
