
import styles  from "./TodoList.module.scss";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    return (
        <ul className={styles.list}>
            {todos.length > 0 ? (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
                <p>Todoを追加してください。</p>
            )}
        </ul>
    )
}

export default TodoList;
