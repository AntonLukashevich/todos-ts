import { useState } from "react"
import { ITodo } from "../../types/todo"

interface IProps{
  todo: ITodo,
  index: number,
  deleteTodo: (index: number) => void
}
export const TodoListItem = ({todo, index, deleteTodo}: IProps) => {
  const [doneTodo, setDoneTodo] = useState(todo.status)

  return(
    <>
    <div
      style={{
        padding: '5px',
        border: '2px solid gray',
        borderRadius: "4px",
        display: 'flex',
        maxWidth: '600px',
        width: '100%',
        justifyContent: 'space-between',
        borderLeft: `5px solid ${todo.priority}`,
        marginBottom: 2
      }}
    > 
      <div
        style={{
          width: '10%'
        }}
      ><input type="checkbox" checked={doneTodo} onChange={() => setDoneTodo(!doneTodo)}/></div>
      <div
        style={{
          display: "flex",
          flexDirection: 'row',
          width: '70%'
        }}
      >{todo.description}</div>
      
      <div
        style={{
          width: '20%'
        }}
      >{todo.created.toLocaleDateString()}</div>
      <div><button onClick={() => deleteTodo(index)}>x</button></div>
    </div>    
    </>
  )
}
