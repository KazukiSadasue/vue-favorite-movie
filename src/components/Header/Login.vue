<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn round flat large v-on="on">ログイン</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">ログイン</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <form>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="email"
                  v-validate="'required|email'"
                  data-vv-name="メールアドレス"
                  :error-messages="errors.collect('メールアドレス')"
                  label="メールアドレス"
                />
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  type="password"
                  v-model="password"
                  v-validate="'required|alpha_num|min:6'"
                  data-vv-name="パスワード"
                  :error-messages="errors.collect('パスワード')"
                  label="パスワード"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-container grid-list-md>
            <v-btn block color="success" dark @click="login">ログイン</v-btn>
          </v-container>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => {
    return {
      email: "",
      password: "",
      dialog: false
    };
  },

  methods: {
    async login() {
      if (await this.$validator.validateAll()) {
        this.dialog = false;
        this.email = this.password = "";
        this.$validator.reset();
        this.$router.push("/list");
      }
    }
  }
};
</script>
