<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light">Favorite Movie</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <Login />
    <Signup />
  </v-toolbar>
</template>

<script>
import Signup from "./Signup";
import Login from "./Login";
export default {
  components: { Signup, Login }
};
</script>
