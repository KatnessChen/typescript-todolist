import { ITodo } from '@/types/index'
interface IState {
  todos: Array<ITodo>
}

export default ({
  addTodo (state: IState, newTodo: ITodo): void {
    state.todos.unshift(newTodo)
  },
  archiveTodo (state: IState, todoId: number): void {
    const todo = state.todos.find((item: ITodo) => item.id === todoId)
    if (todo) todo.isArchived = true
  }
})
