import { ITodo } from '@/types/index'
interface state {
  todos: Array<ITodo>
}

export default ({
  addTodo (state: state, newTodo: ITodo): void {
    state.todos.unshift(newTodo)
  },
  archiveTodo (state: state, todoId: number): void {
    console.log('archiveTodo', todoId)
    const todo = state.todos.find((item: ITodo) => item.id === todoId)
    if (todo) todo.isArchived = true
  }
})
