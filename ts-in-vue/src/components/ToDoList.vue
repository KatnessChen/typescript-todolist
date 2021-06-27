<template>
  <v-list
    flat
    subheader
    three-line
  >
    <v-list-item-group
      v-model="settings"
      multiple
    >
      <to-do-item
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
      />
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ITodo } from '../types/index'
import ToDoItem from '../components/ToDoItem.vue'

@Component({
  components: {
    ToDoItem
  }
})
export default class Home extends Vue {
  private todos: Array<ITodo> = [
    { title: 'a', content: 'B' },
    { title: 'a', content: 'B' },
    { title: 'a', content: 'B' },
    { title: 'a', content: 'B' }
  ]

  private settings = []
}
</script>
