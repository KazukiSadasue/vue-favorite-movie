<template>
  <v-timeline>
    <v-timeline-item color="purple lighten-2" fill-dot right>
      <v-card>
        <v-card-title class="purple lighten-2">
          <h2 class="display-1 white--text font-weight-light">Step 1</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs12>会員登録</v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="amber lighten-1" fill-dot left small>
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="display-1 mr-3 white--text font-weight-light">Step 2</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs12>お気に入りの映画を検索して、お気に入りに登録</v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="cyan lighten-1" fill-dot right>
      <v-card>
        <v-card-title class="cyan lighten-1">
          <h2 class="display-1 white--text font-weight-light">Step 3</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs12>好きな映画を集められます</v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>