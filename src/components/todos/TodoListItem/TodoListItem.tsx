import { useState } from "react"
import { ITodo } from "../../../types/todo"

import './styles.css'

interface IProps{
  todo: ITodo,
  index: number,
  deleteTodo: (index: number) => void
  doneTodo: (index: number, isDone: boolean) => void
}
export const TodoListItem = ({todo, index, deleteTodo, doneTodo}: IProps) => {
  const [isChecked, setIsChecked] = useState(todo.status)

  const done = () => {
    doneTodo(index, !isChecked)
    setIsChecked(!isChecked)
  }

  return(
    <>
      <div className="item-wrapper" style={{borderLeft: `5px solid ${todo.priority}`, opacity: isChecked? 0.5 : 1}}> 
        <div className="checkbox-wrapper">
          <input type="checkbox" checked={isChecked} onChange={() => done()}/>
        </div>
        <div className="description-wrapper">{todo.description}</div>
        
        <div className="created-wrapper">{todo.created.toLocaleDateString()}</div>
        <div><button className="btn-close" onClick={() => deleteTodo(index)}>&#10006;</button></div>
      </div>    
    </>
  )
}
