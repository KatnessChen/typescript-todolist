<template>
  <v-list-item>
    <template v-slot:default="{ active }">
      <v-list-item-action>
        <v-checkbox :input-value="active" />
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>{{ todo.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ todo.content }}</v-list-item-subtitle>
      </v-list-item-content>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { ITodo } from '../types/index'

@Component({})
export default class ToDoItem extends Vue {
  @Prop({ required: true }) readonly todo!: ITodo
}
</script>
