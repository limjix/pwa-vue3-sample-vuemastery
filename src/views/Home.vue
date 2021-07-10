<template>

  <div class="text-h4 py-5">To Do List</div>

  <v-btn
      class="mx-2 myactionbutton"
      fab
      dark
      large
      color="cyan"
      icon
      @click="dialog=true"
  >
    <v-icon dark>
      mdi-plus
    </v-icon>
  </v-btn>

  <v-card color="grey-lighten-3 my-2" v-for="item in todoItems">
    <v-container>
      <v-row>
        <v-col cols="11">
          <div class="d-flex inline">{{ item.text }}</div>
        </v-col>
        <v-col cols="1">
          <input type="checkbox" :checked="item.check">
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <v-dialog
      v-model="dialog"
      persistent
  >
    <v-card>
      <v-card-title class="headline">
        Add a new item
      </v-card-title>
      <v-card-text>
        <input type="text" v-model="newItem">
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
        >
          Cancel
        </v-btn>
        <v-btn
            color="green darken-1"
            text
            @click="addNewItem"
        >
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


</template>

<script>
export default {
  name: "Home",
  props: {
  },
  components: {
    //componentName: () => import('@/components/path'),
  },
  data() {
    return {
      dialog:false,
      newItem: "",
      todoItems: [
        {
          text: "Add your first to-do-item",
          check: false,
        }
      ]
    }
  },
  methods: {
    addNewItem() {
      this.todoItems.push({
        text: this.newItem,
        check: false,
      })
      this.newItem = ""
      this.dialog=false
    }
  }
}
</script>

<style>
.myactionbutton {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>