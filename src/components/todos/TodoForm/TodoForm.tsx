import { useState } from "react"
import { ITodo } from "../../../types/todo";

import './styles.css'

interface IProps{
  createNewTodo: (todo: ITodo) => void;
}

const TodoForm = ({createNewTodo}: IProps) => {
  const [description, seDescription] = useState('')
  const [priority, setPriority] = useState('green')
  const createTodo = () => {
    createNewTodo({description, status: false, priority, created: new Date(), modified: new Date()});
    seDescription('')
    setPriority('green')
  }

  return(
    <>
      <form>
        <input className="description" value={description} onChange={(e) => seDescription(e.target.value)}/>
        <select onChange={(e) => setPriority(e.target.value)} defaultValue={priority}>
          <option value="green" style={{background: 'green'}}>Green</option>
          <option value="yellow" style={{background: 'yellow'}}>Yellow</option>
          <option value="red" style={{background: 'red'}}>Red</option>
        </select>
        <button type="button" onClick={createTodo}>add</button>
      </form>
    </>
  )
}

export default TodoForm;
