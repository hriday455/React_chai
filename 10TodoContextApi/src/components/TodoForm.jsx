import React,{useState} from 'react'
import { useTodo } from './context/TodoContext';



function TodoForm() {
    const [todo,SetTodo]=useState("")
    const {addTodo}=useTodo()
    const add=(e)=>{
        e.preventDefault()
        if(!todo) return 
        addTodo({
            todo,
            completed:false
        })
        SetTodo("")
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>SetTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
/*
📌 Step-by-step Explanation:

👉 Step 1: e.preventDefault()

This prevents the page from refreshing when the user submits the form.
Forms in HTML automatically refresh the page when submitted, but we don’t want that.
👉 Step 2: if (!todo) return

Checks if the input is empty.
If the user presses "Add" without typing anything, it does nothing.
👉 Step 3: addTodo({ todo, completed: false })

Calls addTodo() to add a new task to the list.
The new to-do item has:
todo: The text the user typed.
completed: false: Marks the task as not completed by default.
👉 Step 4: SetTodo("")

Clears the input field after adding a task.
This ensures that after submitting, the input box is empty again.
*/
/*
2️⃣ Understanding value={todo}
jsx
Copy
Edit
value={todo}
📌 What this does:

Controls the input field by linking it to the todo state.
The value of the input box is always the value of todo.
If todo is "Buy Milk", the input box shows "Buy Milk".
👉 Example:

js
Copy
Edit
const [todo, SetTodo] = useState("Buy Milk")
Now, the input box will already contain "Buy Milk" when the page loads.

*/
/*
 What is e.target.value?
e refers to the event object that is automatically passed when an event occurs.
e.target refers to the element that triggered the event (in this case, the input field).
e.target.value gives the current value of the input field (whatever the user types).
*/
