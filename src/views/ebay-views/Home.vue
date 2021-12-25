<template>
  <v-container fluid class="full pa-0">
    <v-carousel cycle hide-delimiters height="328" class="pa-0 slider">
      <template v-slot:prev="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          depressed
          fab
          small
          class="hidden-sm-and-down white black--text prev-btn"
          ><v-icon large>mdi-chevron-left</v-icon></v-btn
        >
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          depressed
          fab
          small
          class="hidden-sm-and-down white black--text next-btn"
          ><v-icon large shaped>mdi-chevron-right</v-icon></v-btn
        >
      </template>

      <v-carousel-item class="slide1 green" width="100%">
        <v-row>
          <v-card
            class="card1 white--text px-16 pt-6 d-flex justify-center"
            width="400"
            height="340"
            tile
          >
            <v-col>
              <h1 class="d-flex justify-center slide-header">
                You may have a special offer
              </h1>
              <p class="lazy-white">Sign in to your account to find out.</p>
              <v-btn tile outlined class="lazy-white px-4 py-6 transform-none"
                >Go to My eBay <v-icon large>mdi-arrow-right</v-icon></v-btn
              >
            </v-col>
          </v-card>

          <v-img
            src="../../assets/imgs/ebay-images/slide1.png"
            class="d-flex align-end justify-end"
          >
            <v-btn
              class="d-flex justify-end align-end"
              style="right: 0; position: absolute"
              >pause</v-btn
            >
          </v-img>
        </v-row>
      </v-carousel-item>
      <v-carousel-item class="slide2 blue" width="100%">
        <v-row>
          <v-card
            class="card2 white--text pl-16 pt-6 d-flex justify-center"
            width="400"
            height="340"
            tile
          >
            <v-col>
              <h1 class="d-flex justify-center slide-header white--text">
                Auto Lovers, Welcome Home
              </h1>
              <p>
                Popular, rare and vintage: parts and accessories for every car
              </p>
              <v-btn tile outlined class="white--text px-3 py-5"
                >Find Your Piece <v-icon large>mdi-arrow-right</v-icon></v-btn
              >
            </v-col>
          </v-card>
          <v-img src="../../assets/imgs/ebay-images/slide2.png"></v-img>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-row class="px-16 pt-16">
      <h2>Explore popular brands</h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h2 style="font-weight: normal">
        See all <v-icon left class="black--text pb-1">mdi-arrow-right</v-icon>
      </h2>
    </v-row>
    <v-row class="px-12">
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/shoe.png"
              max-width="155"
              class="brand-item-img"
            >
            </v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Apple
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/purse.png"
              max-width="155"
              class="brand-item-img"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Samsung
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/glass.png"
              max-width="155"
              class="brand-item-img"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Sony
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/cloth.png"
              max-width="155"
              class="brand-item-img"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Ugreen
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/purse.png"
              max-width="155"
              class="brand-item-img"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Xiaomi
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/glass.png"
              max-width="155"
              class="brand-item-img"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Nike
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/shoe.png"
              max-width="155"
              class="brand-item-img"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Born Pretty
          </v-row>
        </v-col>
      </v-col>
    </v-row>
    <v-row class="px-16 pt-16">
      <h2>Explore Popular Categories</h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h2 style="font-weight: normal">
        See all <v-icon left class="black--text pb-1">mdi-arrow-right</v-icon>
      </h2>
    </v-row>
    <v-row class="px-12">
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/cloth.png"
              class="brand-item-img"
              max-width="155"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Korean beauty
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/shoe.png"
              class="brand-item-img"
              max-width="155"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            WristWatches
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/glass.png"
              class="brand-item-img"
              max-width="155"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Fishing
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/purse.png"
              class="brand-item-img"
              max-width="155"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Collectibles
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/shoe.png"
              class="brand-item-img"
              max-width="155"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Smartphone
          </v-row>
        </v-col>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item">
        <v-col class="brand-item">
          <v-row>
            <v-img
              src="../../assets/imgs/ebay-images/brands/glass.png"
              class="brand-item-img"
              max-width="155"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-center align-center py-3 brand-name">
            Sell
          </v-row>
        </v-col>
      </v-col>
    </v-row>
    <v-row class="px-16 pt-16">
      <h2>Daily Deals</h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h2 style="font-weight: normal">
        See all <v-icon left class="black--text pb-1">mdi-arrow-right</v-icon>
      </h2>
    </v-row>
    <v-sheet class="mt-5">
      <v-slide-group center-active show-arrows overflow="y-overflow">
        <v-slide-item class="daily-deals">
          <v-col>
            <v-row>
              <v-card
                :color="active ? '' : ''"
                class="ma-4"
                height="220"
                width="230"
                elevation="0"
                tile
                @click="toggle"
              >
                <v-img
                  src="../../assets/imgs/ebay-images/daily/daily1.png"
                  width="220"
                  height="230"
                  top
                  absolute
                >
                </v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex justify-start">
              <p class="black--text font-weight-bold price px-5">1,8078$</p>
            </v-row>
          </v-col>
        </v-slide-item>
        <v-slide-item class="daily-deals">
          <v-col>
            <v-row>
              <v-card
                :color="active ? '' : ''"
                class="ma-4"
                height="220"
                width="230"
                elevation="0"
                tile
                @click="toggle"
              >
                <v-img
                  src="../../assets/imgs/ebay-images/daily/daily2.png"
                  width="220"
                  height="230"
                  top
                  absolute
                >
                </v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex justify-start">
              <p class="black--text font-weight-bold price px-5">1,8078$</p>
            </v-row>
          </v-col>
        </v-slide-item>
        <v-slide-item class="daily-deals">
          <v-col>
            <v-row>
              <v-card
                :color="active ? '' : ''"
                class="ma-4"
                height="220"
                width="230"
                elevation="0"
                tile
                @click="toggle"
              >
                <v-img
                  src="../../assets/imgs/ebay-images/daily/daily3.png"
                  width="220"
                  height="230"
                  top
                  absolute
                >
                </v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex justify-start">
              <p class="black--text font-weight-bold price px-5">1,8078$</p>
            </v-row>
          </v-col>
        </v-slide-item>
        <v-slide-item class="daily-deals">
          <v-col>
            <v-row>
              <v-card
                :color="active ? '' : ''"
                class="ma-4"
                height="220"
                width="230"
                elevation="0"
                tile
                @click="toggle"
              >
                <v-img
                  src="../../assets/imgs/ebay-images/daily/daily4.png"
                  width="220"
                  height="230"
                  top
                  absolute
                >
                </v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex justify-start">
              <p class="black--text font-weight-bold price px-5">1,8078$</p>
            </v-row>
          </v-col>
        </v-slide-item>
        <v-slide-item class="daily-deals">
          <v-col>
            <v-row>
              <v-card
                :color="active ? '' : ''"
                class="ma-4"
                height="220"
                width="230"
                elevation="0"
                tile
                @click="toggle"
              >
                <v-img
                  src="../../assets/imgs/ebay-images/daily/daily5.png"
                  width="220"
                  height="230"
                  top
                  absolute
                >
                </v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex justify-start">
              <p class="black--text font-weight-bold price px-5">1,8078$</p>
            </v-row>
          </v-col>
        </v-slide-item>
        <v-slide-item class="daily-deals">
          <v-col>
            <v-row>
              <v-card
                :color="active ? '' : ''"
                class="ma-4"
                height="220"
                width="230"
                elevation="0"
                tile
                @click="toggle"
              >
                <v-img
                  src="../../assets/imgs/ebay-images/daily/daily6.png"
                  width="220"
                  height="230"
                  top
                  absolute
                >
                </v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex justify-start">
              <p class="black--text font-weight-bold price px-5">1,8078$</p>
            </v-row>
          </v-col>
        </v-slide-item>
        <v-slide-item class="daily-deals">
          <v-col>
            <v-row>
              <v-card
                :color="active ? '' : ''"
                class="ma-4"
                height="220"
                width="230"
                elevation="0"
                tile
                @click="toggle"
              >
                <v-img
                  src="../../assets/imgs/ebay-images/daily/daily1.png"
                  width="220"
                  height="230"
                  top
                  absolute
                >
                </v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex justify-start">
              <p class="black--text font-weight-bold price px-5">1,8078$</p>
            </v-row>
          </v-col>
        </v-slide-item>
        <v-slide-item class="daily-deals">
          <v-col>
            <v-row>
              <v-card
                :color="active ? '' : ''"
                class="ma-4"
                height="220"
                width="230"
                elevation="0"
                tile
                @click="toggle"
              >
                <v-img
                  src="../../assets/imgs/ebay-images/daily/daily2.png"
                  width="220"
                  height="230"
                  top
                  absolute
                >
                </v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex justify-start">
              <p class="black--text font-weight-bold price px-5">1,8078$</p>
            </v-row>
          </v-col>
        </v-slide-item>
        <v-slide-item class="daily-deals">
          <v-col>
            <v-row>
              <v-card
                :color="active ? '' : ''"
                class="ma-4"
                height="220"
                width="230"
                elevation="0"
                tile
                @click="toggle"
              >
                <v-img
                  src="../../assets/imgs/ebay-images/daily/daily3.png"
                  width="220"
                  height="230"
                  top
                  absolute
                >
                </v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex justify-start">
              <p class="black--text font-weight-bold price px-5">1,8078$</p>
            </v-row>
          </v-col>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-row class="px-12">
      <!--
      <v-col class="d-flex justify-center align-center brand-item">
        <v-img
          src="../../assets/imgs/ebay-images/brands/shoe.png"
          class="brand-item-img"
          max-width="155"
        ></v-img>
      </v-col>
      <v-col class="d-flex justify-center align-center brand-item"
        ><v-img
          src="../../assets/imgs/ebay-images/brands/glass.png"
          class="brand-item-img"
          max-width="155"
        ></v-img
      ></v-col>
      <v-col class="d-flex justify-center align-center brand-item"
        ><v-img
          src="../../assets/imgs/ebay-images/brands/purse.png"
          class="brand-item-img"
          max-width="155"
        ></v-img
      ></v-col>
      <v-col class="d-flex justify-center align-center brand-item"
        ><v-img
          src="../../assets/imgs/ebay-images/brands/cloth.png"
          class="brand-item-img"
          max-width="155"
        ></v-img
      ></v-col>
      <v-col class="d-flex justify-center align-center brand-item"
        ><v-img
          src="../../assets/imgs/ebay-images/brands/shoe.png"
          class="brand-item-img"
          max-width="155"
        ></v-img
      ></v-col>
      <v-col class="d-flex justify-center align-center brand-item"
        ><v-img
          src="../../assets/imgs/ebay-images/brands/glass.png"
          class="brand-item-img"
          max-width="155"
        ></v-img
      ></v-col>
      <v-col class="d-flex justify-center align-center brand-item"
        ><v-img
          src="../../assets/imgs/ebay-images/brands/purse.png"
          class="brand-item-img"
          max-width="155"
        ></v-img
      ></v-col>
    --></v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      deals: [
        { img: "../../assets/imgs/ebay-images/daily/daily1.png" },
        { img: "../../assets/imgs/ebay-images/daily/daily1.png" },
        { img: "../../assets/imgs/ebay-images/daily/daily1.png" },
        { img: "../../assets/imgs/ebay-images/daily/daily1.png" },
        { img: "../../assets/imgs/ebay-images/daily/daily1.png" },
      ],
    };
  },
};
</script>

<style scoped>
.slide2,
.card1 {
  background-color: #a42f01e5 !important;
}
.card2 {
  background-color: #0e4a6e !important;
}
.lazy-white {
  color: #ffffffbf !important;
}
h1.slide-header {
  font-size: 36px;
  color: #ffffffbf;
}
div.full {
  padding: 0px 0px 0px 0px !important;
}
div.v-window__prev {
  background-color: #0e4a6e !important;
  margin: 0px 0px 0px 0px !important;
}
.brand-item-img {
  border-radius: 100px;
}

.brand-name {
  cursor: pointer;
}

.brand-item:hover .brand-item-img {
  border: 1px solid grey;
}
.brand-item:hover .brand-name {
  text-decoration: underline;
}
.next-btn,
.prev-btn {
  display: none;
}
.slider:hover .next-btn,
.slider:hover .prev-btn {
  display: block;
}
.daily-deals:hover p.price {
  text-decoration: underline;
}
</style>