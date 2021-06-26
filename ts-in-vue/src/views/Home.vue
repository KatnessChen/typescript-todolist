<template>
  <div class="home">
    <to-do-creator
      :open.sync="isOpenCreator"
      @add="add"
    />
    <to-do-list />
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
  private todos = []

  add (info: ITodo) {
    console.log(info)
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .create-btn {
    position: absolute;
    right: 8px;
    bottom: 16px;
  }
}
</style>
