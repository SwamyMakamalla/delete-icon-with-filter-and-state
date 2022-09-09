// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItem, toDeleteTodo} = props
  const {title, id} = eachItem

  const onDelete = () => {
    toDeleteTodo(id)
  }

  return (
    <li className="list-items">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
