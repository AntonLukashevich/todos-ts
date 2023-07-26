import { useState } from "react";
import { TodoForm } from "../components/todos/todoForm";
import { ITodo } from "../types/todo";
import { TodoListItem } from "../components/todos/TodoListItem";


const styles = {
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  padding: '20px'
}

export default function TodoList(){
  const [todos, setTodos] = useState<ITodo[]>([])

  const createNewTodo = (newTodo: ITodo) => {
    setTodos(todos.concat(newTodo))
  }

  const deleteTodo = (idx: number) => {
    const filtered = todos.filter((t, index) => index !== idx)
    setTodos(filtered)
  }

  return(
    <div style={styles}>
      <TodoForm createNewTodo={createNewTodo}/>
      {todos && todos.map((todo, index) => <TodoListItem todo={todo} index={index} deleteTodo={deleteTodo} key={index}/>)}
    </div>
  )
}
