<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h3>
          {{ userName }}'s Todo List
        </h3>
      </div>

      <v-spacer />

      <router-link
        v-show="$route.name === 'Archived'"
        :to="{ name: 'Home' }"
      >
        <v-btn>
          ToDoList
        </v-btn>
      </router-link>
      <router-link
        v-show="$route.name === 'Home'"
        :to="{ name: 'Archived' }"
      >
        <v-btn>
          Archived
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view class="pa-4" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  private userName = 'Kat'
}
</script>
