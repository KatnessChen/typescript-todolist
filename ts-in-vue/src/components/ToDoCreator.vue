<template>
  <v-dialog
    v-model="isOpen"
  >
    <div class="pt-4 px-4">
      <v-text-field
        v-model="titleInput"
        label="Title"
        hide-details="auto"
        :rules="[required, min]"
        class="mb-4"
      />
      <v-text-field
        v-model="contentInput"
        label="Content"
        hide-details="auto"
        :rules="[required]"
      />
      <v-btn
        icon
        color="pink"
        class="float-right my-2"
        @click="addToDo"
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, PropSync, Emit } from 'vue-property-decorator'
import { ITodo } from '../types/index'

@Component({})
export default class ToDoCreator extends Vue {
  @PropSync('open', { type: Boolean }) isOpen!: boolean

  titleInput = ''
  contentInput = ''
  private required = (value: string) => !!value || 'Required.'
  private min = (value: string) => (value && value.length >= 3) || 'Min 3 characters'

  @Emit('add')
  addToDo (): ITodo {
    return {
      title: this.titleInput,
      content: this.contentInput
    }
  }
}
</script>

<style lang="scss">
.v-dialog {
  background-color: #fff;
}
</style>
