<template>
  <div class="home">
    <to-do-creator
      :open.sync="isOpenCreator"
      @add="add"
    />
    <to-do-list :todos="activeTodos" />
    <v-btn
      class="create-btn mx-2"
      fab
      dark
      color="pink"
      @click="isOpenCreator = true"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ToDoCreator from '../components/ToDoCreator.vue'
import ToDoList from '../components/ToDoList.vue'
import { ITodo } from '../types/index'

@Component({
  components: {
    ToDoCreator,
    ToDoList
  }
})
export default class Home extends Vue {
  private isOpenCreator = false
  @namespace('todos').State todos!: Array<ITodo>;

  add (todo: ITodo): void {
    this.$store.commit('todos/addTodo', todo)
    this.isOpenCreator = false
  }

  get activeTodos (): Array<ITodo> {
    return this.todos.filter(item => !item.isArchived)
  }
}
</script>

<style lang="scss" scoped>
.home {
  .create-btn {
    position: absolute;
    right: 8px;
    bottom: 16px;
  }
}
</style>
