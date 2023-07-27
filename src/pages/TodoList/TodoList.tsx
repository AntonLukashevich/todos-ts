import { useState } from "react";

import { ITodo } from "../../types/todo";
import { TodoListItem } from "../../components/todos/TodoListItem/TodoListItem";
import TodoForm from "../../components/todos/TodoForm/TodoForm";

import './styles.css'

export default function TodoList(){
  const [todos, setTodos] = useState<ITodo[]>([])

  const createNewTodo = (newTodo: ITodo) => {
    setTodos(todos.concat(newTodo))
  }

  const deleteTodo = (idx: number) => {
    const filtered = todos.filter((t, index) => index !== idx)
    setTodos(filtered)
  }

  const doneTodo = (idx: number, isDone: boolean) => {

  }

  return(
    <div className="list-wrapper">
      <TodoForm createNewTodo={createNewTodo}/>
      {todos && todos.map((todo, index) => <TodoListItem todo={todo} index={index} deleteTodo={deleteTodo} doneTodo={doneTodo} key={index}/>)}
    </div>
  )
}
