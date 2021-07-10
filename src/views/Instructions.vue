<template>
  <div class="text-h4 py-5">Instructions</div>

  <p>
    This app was built as a simple demonstration of a PWA. In order to install the app, tap the menu on the top right of your chrome browser,
    You will see "Install this App". Click on that and you will find this app on your home screen
  </p>

</template>

<script>
export default {
  name: "Instructions",
  props: {
    propName: {
      type: String,
      required: false
    }
  },
  components: {
    //componentName: () => import('@/components/path'),
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>