<template>
  <v-container class="d-flex justify-center align-center">
    <v-card
      class="d-flex justify-center align-center pa-10"
      width="450"
      elevation="0"
    >
      <v-col>
        <v-row class="d-flex justify-center align-center">
          <h1>Hello</h1>
        </v-row>
        <v-row class="d-flex justify-center align-center">
          <p>
            Sign in to ebay or
            <v-btn
              depressed
              tile
              text
              :ripple="false"
              class="pa-0 ma-0 mb-1 text-lowercase signin-up"
              height="10"
              style="padding: 0px"
              route
              to="/sign-up"
            >
              create an account</v-btn
            >
          </p>
        </v-row>

        <v-row class="d-flex justify-center align-center py-6">
          <v-col>
            <v-row>
              <v-text-field
                outlined
                dense
                style="
                  border-radius: 10px;
                  font-size: 18px !important;
                  height: 55px;
                "
                label="Email or username"
                v-model="user"
              ></v-text-field>
            </v-row>
            <v-row class="d-flex justify-center align-center">
              <v-btn
                outlined
                dense
                class="continue-btn px-16 py-6 text-none"
                @click="signin"
                >Continue</v-btn
              >
            </v-row>
          </v-col>
        </v-row>
        <v-row class="py-2">
          <v-divider class="mt-3 mr-2"></v-divider>
          <p>or</p>
          <v-divider class="mt-3 ml-2"></v-divider>
        </v-row>

        <v-row class="d-flex justify-center align-center">
          <v-col>
            <v-row class="d-flex justify-center align-center py-1">
              <v-btn
                outlined
                dense
                class="
                  continue-facebook-btn
                  px-16
                  py-6
                  text-none
                  d-flex
                  justify-end
                  align-center
                "
              >
                <v-icon large left class="pr-10">mdi-facebook</v-icon>
                Continue with Facebook</v-btn
              >
            </v-row>
            <v-row class="d-flex justify-center align-center py-2">
              <v-btn
                outlined
                dense
                class="
                  continue-with-btn
                  px-16
                  py-6
                  text-none
                  d-flex
                  justify-end
                  align-center
                "
              >
                <v-icon large left class="pr-16">mdi-google</v-icon>
                Continue with Google</v-btn
              >
            </v-row>
            <v-row class="d-flex justify-center align-center py-1">
              <v-btn
                outlined
                dense
                class="
                  continue-with-btn
                  px-16
                  py-6
                  text-none
                  d-flex
                  justify-end
                  align-center
                "
              >
                <v-icon large left class="pr-16 mr-6">mdi-apple</v-icon>
                Continue with Apple</v-btn
              >
            </v-row>

            <v-row class="d-flex justify-center align-center">
              <v-checkbox :check="true"></v-checkbox> Stay signed in
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    signin() {
      if (this.user) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped>
.v-btn.signin-up {
  letter-spacing: 0pt;
  color: rgb(0, 60, 255) !important;
  cursor: pointer;
  background-color: #ffffff;
  min-width: 12px !important;

  text-decoration: underline;
  padding: 0 !important;
  background-image: linear-gradient(#f5f5f5, #f5f5f5);
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.v-btn.signin-up::before {
  background-color: transparent;
  border-radius: 100px;

  min-width: 50px !important;
  font-size: 16px;
  margin: 0px 100px 0px 100px !important;
  background-image: gray;
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.signin-up:hover {
  background-color: transparent;
}
.v-btn.continue-btn {
  background: rgb(69, 69, 248);
  color: white;
  border-radius: 25px;
  font-size: 18px !important;
  width: 100%;
}
.v-btn.continue-facebook-btn {
  background: rgb(75, 75, 148);
  color: white;
  border-radius: 25px;
  font-size: 18px !important;
  width: 100%;
}
.v-btn.continue-with-btn {
  color: #504d4d;
  border-radius: 25px;
  font-size: 18px !important;
  width: 100%;
}
</style>