<template>
  <div class="about">
    <to-do-list :todos="archivedTodos" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ToDoList from '../components/ToDoList.vue'
import { ITodo } from '../types/index'

@Component({
  components: {
    ToDoList
  }
})
export default class Archived extends Vue {
  @namespace('todos').State todos!: Array<ITodo>

  get archivedTodos (): Array<ITodo> {
    return this.todos.filter(item => item.isArchived)
  }
}
</script>
