<template>
  <v-container fluid>
    <v-img src="https://source.unsplash.com/Ecd6OssiX5A/1200x800" height="900">
      <div class="mt-5 text-xs-center display-3 font-weight-thin">好きな映画を集めよう</div>
    </v-img>
    <Step />
  </v-container>
</template>

<script>
import Step from "./Step";
export default {
  components: { Step }
};
</script>
