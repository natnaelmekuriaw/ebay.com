<template>
  <v-container fluid class="pa-0">
    <v-app-bar prominent width="100%" height="148" class="white ma-0 pa-0 nav">
      <v-col class="ma-0 pa-0">
        <div class="px-7 py-1">
          <v-row class="py-3">
            <p class="ma-0 pa-0 nav-text px-4">
              Hi!
              <v-btn
                depressed
                tile
                text
                class="pa-0 ma-0 mb-1 text-lowercase signin-up"
                :ripple="false"
                height="10"
                style="padding: 0px"
                route
                to="/sign-in"
              >
                Sign in</v-btn
              >
              or
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
                >register</v-btn
              >
            </p>
            <p class="ma-0 pa-0 nav-text px-3">Daily Deals</p>
            <p class="ma-0 pa-0 nav-text px-3">Help &amp; Contact</p>

            <v-spacer></v-spacer>

            <p class="ma-0 pa-0 nav-text px-2">Ship to</p>
            <p class="ma-0 pa-0 nav-text px-2">Sell</p>
            <p class="ma-0 pa-0 nav-text px-2">
              Watchlist
              <v-icon left>mdi-chevron-down </v-icon>
            </p>
            <p class="ma-0 pa-0 nav-text px-2">
              My eBay
              <v-icon left>mdi-chevron-down </v-icon>
            </p>
            <v-icon class="black--text px-3">mdi-bell-outline</v-icon>
            <v-icon class="black--text px-4 pr-6">mdi-cart-outline</v-icon>
          </v-row>
        </div>
        <v-divider class="ma-0 pa-0"></v-divider>
        <v-row class="py-3">
          <div class="pa-2 px-10">
            <v-row>
              <!--
              <v-col>
                <v-img
                  src="../../assets/imgs/ebay-images/eBay-logo.png"
                  width="130"
                  height=""
                ></v-img>
              </v-col>-->
              <v-col>
                <span class="d-flex justify-start align-center pt-3">
                  <v-btn
                    depressed
                    text
                    route
                    to="/"
                    v-ripple="false"
                    class="logo-btn"
                  >
                    <v-img
                      alt="eBayLogo.png"
                      class="shrink"
                      contain
                      src="../../assets/imgs/ebay-images/eBay-logo.png"
                      transition="scale-transition"
                      width="130"
                      height=""
                    />
                  </v-btn>
                </span>
              </v-col>
            </v-row>
          </div>
          <v-card
            class="pa-0 d-flex justify-center align-center"
            style="background: none"
            width="80"
            tile
            elevation="0"
          >
            <v-row>
              <v-col
                style="padding-left: 0px; padding-right: 0px; max-width: 100px"
              >
                <v-row
                  class="pa-0"
                  style="
                    padding-left: 0px;
                    padding-right: 0px;
                    max-width: 100px !important;
                  "
                >
                  <!--<p
                    style="
                      font-size: 15px;
                      margin-bottom: 0px !important;
                      line-height: 1.1;
                    "
                    class="d-flex justify-center align-center mt-1 px-0"
                  >
                    Shop by <br />category
                  </p>-->

                  <v-menu offset-y tile>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        :bind="attrs"
                        :on="on"
                        x-small
                        depressed
                        :ripple="false"
                        v-bind="attrs"
                        v-on="on"
                        class="
                          d-flex
                          justify-center
                          align-center
                          text-none
                          mt-7
                          mb-5
                          pa-10
                          drop
                        "
                      >
                        <p
                          class="
                            d-flex
                            justify-center
                            align-center
                            mt-0
                            px-0
                            pl-1
                            shop
                          "
                          style="
                            font-size: 15px;
                            margin-bottom: 0px !important;
                            line-height: 1.1;
                          "
                        >
                          Shop by <br />category
                        </p>
                        <v-icon large>mdi-chevron-down</v-icon></v-btn
                      >
                    </template>
                    <v-card
                      tile
                      elevation="5"
                      width="680"
                      style="border: 1px solid grey"
                      class="catagories pa-5"
                    >
                      <v-row>
                        <v-col>
                          <h4 class="pb-3 cat-drop">
                            Collectibles &amp; Art
                            <v-icon class="blue--text"
                              >mdi-chevron-right</v-icon
                            >
                          </h4>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <v-row></v-row>
                        </v-col>
                        <v-col>
                          <h4 class="pb-3 cat-drop">
                            Collectibles &amp; Art
                            <v-icon class="blue--text"
                              >mdi-chevron-right</v-icon
                            >
                          </h4>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <v-row></v-row>
                        </v-col>
                        <v-col>
                          <h4 class="pb-3 cat-drop">
                            Collectibles &amp; Art
                            <v-icon class="blue--text"
                              >mdi-chevron-right</v-icon
                            >
                          </h4>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <v-row></v-row>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <h4 class="pb-3 cat-drop">
                            Collectibles &amp; Art
                            <v-icon class="blue--text"
                              >mdi-chevron-right</v-icon
                            >
                          </h4>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <v-row></v-row>
                        </v-col>
                        <v-col>
                          <h4 class="pb-3 cat-drop">
                            Collectibles &amp; Art
                            <v-icon class="blue--text"
                              >mdi-chevron-right</v-icon
                            >
                          </h4>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <v-row></v-row>
                        </v-col>
                        <v-col>
                          <h4 class="pb-3 cat-drop">
                            Collectibles &amp; Art
                            <v-icon class="blue--text"
                              >mdi-chevron-right</v-icon
                            >
                          </h4>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <v-row></v-row>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <h4 class="pb-3 cat-drop">
                            Collectibles &amp; Art
                            <v-icon class="blue--text"
                              >mdi-chevron-right</v-icon
                            >
                          </h4>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <v-row></v-row>
                        </v-col>
                        <v-col>
                          <h4 class="pb-3 cat-drop">
                            Collectibles &amp; Art
                            <v-icon class="blue--text"
                              >mdi-chevron-right</v-icon
                            >
                          </h4>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <v-row></v-row>
                        </v-col>
                        <v-col>
                          <h4 class="pb-3 cat-drop">
                            Collectibles &amp; Art
                            <v-icon class="blue--text"
                              >mdi-chevron-right</v-icon
                            >
                          </h4>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <p
                            style="line-height: 0pt; font-size: 12px"
                            class="d-flex justify-start px-2 py-1 collections"
                          >
                            Collections
                          </p>
                          <v-row></v-row>
                        </v-col>
                      </v-row>
                      <v-row class="pt-5">
                        <v-divider></v-divider>
                      </v-row>
                      <v-row class="pt-5 pb-2 pr-16 d-flex justify-end">
                        <a href=""> See all categories </a>
                        <v-icon style="text-decoration: none; color: blue"
                          >mdi-chevron-right</v-icon
                        >
                      </v-row>
                    </v-card>
                  </v-menu>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
          <v-col>
            <v-card
              class="pa-0 pt-9 d-flex justify-center align-center"
              style="background: none"
              width="100%"
              height="50"
              elevation="0"
            >
              <v-row class="px-0" style="padding-left: 0px; padding-right: 0px">
                <v-col
                  class="pr-2 pl-0"
                  style="padding-left: 0px; padding-right: 0px"
                >
                  <v-text-field
                    outlined
                    tile
                    dense
                    width="100"
                    height="47"
                    style="border-radius: 0px"
                    prepend-inner-icon="mdi-magnify"
                    placeholder="Search for anything"
                  >
                  </v-text-field>
                </v-col>
                <v-col class="px-0" style="max-width: 200px">
                  <v-btn
                    tile
                    depressed
                    class="search-btn text-none px-16 pt-6 pb-6"
                    >Search</v-btn
                  >
                </v-col>
                <v-col class="px-0" style="max-width: 120px"
                  ><p style="font-size: 14px" class="py-3">Advanced</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="ma-0 pa-0"></v-divider>
        <div class="px-16 mx-10">
          <v-row class="py-3 px-14">
            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-5
                underlined
                text-capitalize
              "
              route
              to="/"
              :ripple="false"
              tile
              text
              depressed
              >Home
            </v-btn>
            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-2
                underlined
                text-capitalize
              "
              route
              to="/sign-in"
              :ripple="false"
              tile
              text
              depressed
              ><v-icon x-small>mdi-heart</v-icon>Saved
            </v-btn>

            
             <v-menu offset-y tile open-on-hover>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
              class="
                px-0
                mx-2
                d-flex
                justify-center
                align-center
             
                underlined
                text-capitalize
              "
              route
              to="/electronics"
              :ripple="false"
              :bind="attrs"
              :on="on"
              tile
              text
              depressed
              >Electronics
            </v-btn>
                       
                    </template>
                    <v-card
                      tile
                      elevation="5"
                      width="680"
                      style="border: 1px solid grey"
                      class="catagories pa-5"
                    >
                    </v-card>
                      <h1>  HAHAHA</h1>
                  </v-menu>

            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-2
                underlined
                text-capitalize
              "
              route
              to="/fashion"
              :ripple="false"
              tile
              text
              depressed
              >Fashion
            </v-btn>

            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-3
                underlined
                text-capitalize
              "
              route
              to="/Health-Beauty"
              :ripple="false"
              tile
              text
              depressed
              >Health &amp; Beauty
            </v-btn>
            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-3
                underlined
                text-capitalize
              "
              route
              to="/Home-Garden"
              :ripple="false"
              tile
              text
              depressed
              >Home &amp; Garden
            </v-btn>

            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-2
                underlined
                text-capitalize
              "
              route
              to="/Sports"
              :ripple="false"
              tile
              text
              depressed
              >Sports
            </v-btn>

            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-3
                underlined
                text-capitalize
              "
              route
              to="/Collectibles-Art"
              :ripple="false"
              tile
              text
              depressed
              >Collectibles and Art
            </v-btn>

            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-3
                underlined
                text-none
              "
              route
              to="/industrial-equipment"
              :ripple="false"
              tile
              text
              depressed
            >
              Industrial equipment
            </v-btn>

            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-2
                underlined
                text-capitalize
              "
              route
              to="/motors"
              :ripple="false"
              tile
              text
              depressed
            >
              Motors
            </v-btn>

            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-2
                underlined
                text-capitalize
              "
              route
              to="/deals"
              :ripple="false"
              tile
              text
              depressed
            >
              Deals
            </v-btn>

            <v-btn
              class="
                px-0
                d-flex
                justify-center
                align-center
                mx-2
                underlined
                text-capitalize
              "
              route
              to="/sell"
              :ripple="false"
              tile
              text
              depressed
            >
              Sell
            </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.nav,
.v-toolbar__content {
  padding: 0px 0px !important;
}
p.nav-text,
.v-btn.nav-text {
  font-size: 13px;
}

.v-btn.signin-up {
  letter-spacing: 0pt;
  color: rgb(0, 60, 255) !important;
  cursor: pointer;
  background-color: #f5f5f5;
  min-width: 12px !important;
  font-size: 13px !important;
  text-decoration: underline;
  padding: 0 !important;
  background-image: linear-gradient(#f5f5f5, #f5f5f5);
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.signin-up:hover {
  background-color: transparent;
}
.search-btn {
  font-size: 14px !important;
  font-weight: normal;
  background: rgba(0, 0, 255, 0.652) !important;
  color: #ffffffff !important;
}
.v-btn.underlined {
  letter-spacing: 0px;
  min-width: 30px !important;
  font-size: 13px;
  display: inline-block;
  padding: 0 !important;
  background-image: linear-gradient(rgb(79, 75, 75), rgb(79, 75, 75));
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.v-btn--active {
  /*color: orange !important;*/
  padding: 0px !important;
  background-position: 100% 100%;
  background-size: 100% 3px !important;
  border-radius: 1px !important;
}
.v-btn.logo-btn {
  text-decoration: none;
  padding: 0px 0px 0px 0px !important;
}
.v-btn.logo-btn,
.v-btn.logo-btn::before,
.v-btn.logo-btn::after,
.v-btn--active.logo-btn {
  background-color: transparent;
}

.v-btn.underlined:hover {
  background-position: 100% 100%;
  background-size: 100% 3px;
}
.v-btn.underlined::before,
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
.v-input__prepend-inner {
}

.v-btn.drop {
  letter-spacing: 0pt;
  font-weight: normal;
  color: #595959;
  cursor: pointer;
  background-color: #ffffff;
  min-width: 12px !important;
  font-size: 13px !important;
  border: 1px solid #ffffff;
  border-radius: 3px 3px 0px 0px;
  padding: 0 !important;
  padding-bottom: 20px !important;
  padding-top: 25px !important;

  background-image: linear-gradient(#ffffff, #ffffff);
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  background-color: transparent !important;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.v-btn.drop:hover p.shop {
  color: rgb(42, 42, 211);
}
.v-btn.drop:focus,
.v-btn.drop:active {
  border: 1px solid rgb(162, 156, 156);
  border-radius: 3px 3px 0px 0px;
  background-color: transparent;
}
.v-btn.drop::before {
  background-color: transparent;
  border-radius: 100px;
  padding-bottom: 30px !important;
  padding-top: 15px !important;
  min-width: 50px !important;
  font-size: 16px;
  margin: 0px 100px 0px 100px !important;
  background-image: #ffffff;
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.catagories {
  background-color: #ffffff !important;
}
.cat-drop,
.collections {
  cursor: pointer;
}
.cat-drop:hover,
.collections:hover {
  color: blue;
  text-decoration: underline;
}
</style>