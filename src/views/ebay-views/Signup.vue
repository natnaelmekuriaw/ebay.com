<template>
  <v-container class="d-flex justify-center align-center">
    <v-col class="pa-0 py-2">
      <v-row class="pt-3 ml-16 d-flex justify-end">
        <p class="black--text">
          Already a member?
          <v-btn
            tile
            text
            depressed
            class="text-none signup"
            :ripple="false"
            route
            to="/sign-in"
            >Sign in</v-btn
          >
        </p>
      </v-row>
      <v-row>
        <v-form ref="form">
          <v-card
            class="d-flex justify-center align-center mx-16"
            width="1000"
            elevation="0"
          >
            <v-col class="px-14">
              <v-row class="d-flex justify-center align-center">
                <h1>Create an account</h1>
              </v-row>
              <v-row class="d-flex justify-center align-center py-1">
                <v-row>
                  <v-col>
                    <v-row class="d-flex justify-end px-2">
                      <v-radio></v-radio>
                      <p class="d-flex justify-end pt-5">Personal account</p>
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-row>
                      <v-radio></v-radio>
                      <p class="d-flex justify-center pt-5">Business account</p>
                      <v-btn
                        fab
                        tile
                        text
                        :ripple="false"
                        class="d-flex align-center info-btn"
                        ><v-icon>mdi-information</v-icon></v-btn
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-row>
              <!--
        <v-row class="py-2">
          <v-divider class="mt-3 mr-2"></v-divider>
          <p>or</p>
          <v-divider class="mt-3 ml-2"></v-divider>
        </v-row>-->
              <v-row>
                <v-col class="px-6 py-10">
                  <v-row>
                    <v-col>
                      <v-text-field
                        label="First name"
                        v-model="firstname"
                        ref="firstname"
                        :rules="[rules.required1]"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        label="Last name"
                        v-model="lastname"
                        ref="lastname"
                        :rules="[rules.required2]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="px-3">
                    <v-text-field
                      label="Email"
                      v-model="email"
                      ref="email"
                      :rules="[rules.required, rules.email]"
                    ></v-text-field>
                  </v-row>
                  <v-row class="px-3">
                    <v-text-field
                      label="Password"
                      v-model="password"
                      ref="password"
                      :rules="[rules.prequired, rules.plength]"
                      :type="show ? 'text' : 'password'"
                    >
                    </v-text-field>
                    <v-btn
                      class="my-4 pa-0 show"
                      :ripple="false"
                      depressed
                      text
                      @click="
                        show = !show;
                        if (show) password_icon = null;
                        else password_icon = '-off';
                      "
                      ><v-icon>mdi-eye{{ password_icon }} </v-icon></v-btn
                    >
                  </v-row>
                  <v-row class="px-3 py-0"
                    ><p style="font-size: 14px">
                      By Creating an account, you agree to our
                      <a href=""> User Agreement</a> and acknowledge reading
                      our<a href=""> User Privacy Notice</a>.
                    </p></v-row
                  >
                  <v-row class="px-3">
                    <v-btn
                      tile
                      depressed
                      class="white--text px-16 py-7 text-none"
                      :class="!create ? 'blue' : 'grey'"
                      style="
                        padding-right: 115px !important;
                        padding-left: 115px !important;
                      "
                      @click="signup"
                      >Create account</v-btn
                    >
                  </v-row>
                </v-col>
                <v-col class="pl-10 my-5">
                  <v-divider
                    vertical
                    class="pl-8"
                    style="min-height: 160px; max-height: 160px"
                  ></v-divider>
                  <p class="pl-6">or</p>
                  <v-divider
                    vertical
                    class="pl-8"
                    style="min-height: 160px; max-height: 160px"
                  ></v-divider>
                </v-col>

                <v-col class="pa-16 my-15">
                  <v-row class="d-flex justify-center align-center">
                    <v-col>
                      <v-row class="d-flex justify-start align-center py-2">
                        <v-btn
                          outlined
                          dense
                          class="
                            continue-with-btn
                            py-6
                            text-none
                            d-flex
                            justify-start
                            align-center
                            black--text
                          "
                        >
                          <v-icon large left class="px-5">mdi-google</v-icon>
                          Continue with Google</v-btn
                        >
                      </v-row>
                      <v-row class="d-flex justify-start align-center py-1">
                        <v-btn
                          outlined
                          dense
                          class="
                            continue-facebook-btn
                            py-6
                            text-none
                            d-flex
                            justify-start
                            align-center
                          "
                        >
                          <v-icon large left class="px-5">mdi-facebook</v-icon>
                          Continue with Facebook</v-btn
                        >
                      </v-row>

                      <v-row class="d-flex justify-start align-center py-1">
                        <v-btn
                          outlined
                          dense
                          class="
                            continue-with-btn
                            py-6
                            text-none
                            black--text
                            d-flex
                            justify-start
                            align-center
                          "
                        >
                          <v-icon large left class="px-5">mdi-apple</v-icon>
                          Continue with Apple</v-btn
                        >
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-card>
        </v-form>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      show: false,
      formHasErrors: true,
      password_icon: "-off",
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      rules: {
        required: (value) => !!value || "Please enter your email",
        required1: (value) => !!value || "Please enter your first name",
        required2: (value) => !!value || "Please enter your last name",

        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        crequired: (value) => !!value || "Please confirm your password",
        cmatch: (value) => value === this.password || "Password does't match",

        prequired: (value) => !!value || "Please enter your password",
        plength: (value) =>
          value.length >= 8 || "Password should be at least 8 characters!",
      },
    };
  },
  computed: {
    form() {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };
    },
    create() {
      return {
        activate_signup: !this.formHasErrors,
      };
    },
  },
  methods: {
    signup() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });
      const emailReg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!emailReg.test(this.email) || this.password.length < 8) {
        this.formHasErrors = true;
      }

      //   alert(this.formHasErrors);
      if (this.formHasErrors) {
        alert("Come on dude. you have to fill the form first");
      } else {
        alert("Sign up successful.");
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped>
.v-btn.info-btn {
  letter-spacing: 0pt;

  cursor: pointer;
  background-color: #ffffff;
  min-width: 5px !important;

  padding: 0 !important;

  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.v-btn.info-btn::before {
  background-color: transparent;
  border-radius: 100px;
  padding: 0px 0px 0px 0px !important;
  min-width: 5px !important;
  font-size: 16px;
  margin: 0px 100px 0px 100px !important;
  background-image: gray;
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.info-btn:hover {
  background-color: transparent;
}

.v-btn.info-btn {
  cursor: pointer;
  background-color: #ffffff;
  min-width: 12px !important;
  padding: 0 !important;
  background-image: linear-gradient(#f5f5f5, #f5f5f5);
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.v-btn.signup::before {
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
.signup:hover {
  background-color: transparent;
}
.v-btn.continue-btn {
  background: rgb(69, 69, 248);
  color: white;
  border-radius: 25px;
  font-size: 18px !important;
  width: 90%;
}
.v-btn.continue-facebook-btn {
  background: rgb(75, 75, 148);
  color: white;
  border-radius: 0px;
  border: 1px solid rgb(75, 75, 148);
  font-size: 18px !important;
  width: 100%;
}
.v-btn.continue-with-btn {
  color: #504d4d;
  border-radius: 0px;
  font-size: 18px !important;
  width: 100%;
}

.v-btn.show {
  letter-spacing: 0pt;

  cursor: pointer;
  background-color: #f5f5f5;
  min-width: 12px !important;
  font-size: 13px !important;

  padding: 0 !important;
  background-image: linear-gradient(#f5f5f5, #f5f5f5);
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.v-btn.show {
  background-color: transparent;
}
.v-btn.show::before {
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
.v-btn.signup {
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
.v-btn.signup::before {
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
.signup:hover {
  background-color: transparent;
}
</style>