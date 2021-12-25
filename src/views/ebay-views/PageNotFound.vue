<template>
  <v-container>
    <div class="page-not-found d-flex justify-center py-10">
      <h2>Sorry! This page is under development</h2>

      <v-btn text route to="/" class="py-2 px-1 mx-5">
        Go Home
        <v-icon right>mdi-home</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  text-decoration: none;
  display: inline-block;
}
</style>