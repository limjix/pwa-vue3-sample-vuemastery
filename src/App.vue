<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
        expand-on-hover
    >
      <v-container>
        <v-card color="blue" class="my-2" height="50px" @click="$router.push({name:'Home'})"><v-container>To Do List</v-container></v-card>
        <v-card color="blue" class="my-2" height="50px" @click="$router.push({name:'Instructions'})"><v-container>Instructions</v-container></v-card>
      </v-container>

    </v-navigation-drawer>

    <v-app-bar
        color="blue accent-4"
        dark
        app
    >

      <v-btn
          color="blue"
          icon
          @click.stop="drawer = !drawer"
          @blur = "test"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <div class="px-5 white--text">My Simple PWA</div>

      <v-spacer></v-spacer>

    </v-app-bar>

<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>



  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
  data() {
    return {
      drawer: false,
      group: 0
    }
  },
  methods: {
    test() {
      console.log("HE")
      this.drawer=false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
