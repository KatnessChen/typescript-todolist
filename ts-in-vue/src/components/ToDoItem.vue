<template>
  <v-list-item>
    <template v-slot:default="{ active }">
      <v-list-item-action v-if="!todo.isArchived">
        <v-checkbox
          :input-value="active"
          @change="onToggleCheck"
        />
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>{{ todo.title }}</v-list-item-title>
      </v-list-item-content>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { ITodo } from '../types/index'

const todoModule = namespace('@/store/todos')

@Component({})
export default class ToDoItem extends Vue {
  @Prop({ required: true }) readonly todo!: ITodo
  @todoModule.Mutation('archiveTodo') archiveTodo!: (todoId: number) => void

  async onToggleCheck (done: boolean): Promise<void> {
    console.log(done)
    if (done) {
      const isConfirm = await confirm('確定完成？')
      if (isConfirm) this.$store.commit('todos/archiveTodo', this.todo.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-list-item__content {
  height: 60px;
  .v-list-item__title {
    padding-left: 24px;
  }
}
.v-list-item__action {
  height: 60px;
  margin: 0 !important;
  display: flex;
  align-items: center;
  margin-right: 20px;
}
</style>
