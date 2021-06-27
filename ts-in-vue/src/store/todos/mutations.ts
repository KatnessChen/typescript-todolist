import { ITodo } from '@/types/index'
interface state {
  todos: Array<ITodo>
}

export default ({
  addTodo (state: state, newTodo: ITodo): void {
    state.todos.unshift(newTodo)
  }
})
