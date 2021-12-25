<template>
  <v-app>
    <Navbar />
    <v-main class="ma-0">
      <router-view>
        <Home />
      </router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/ebay-components/Navbar";
import Home from "./views/ebay-views/Home";
import Footer from "./components/ebay-components/footer";
//import googlefonts = url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

export default {
  name: "App",

  components: {
    Navbar,
    Home,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap");
#app {
  /*font-family: Futura, "Zen Kurenaido", Roboto, Noto, Avenir, Helvetica, Arial,
    sans-serif;*/
  font-family: "Helvetica Neue", Helvetica, Arial, Futura, "Zen Kurenaido",
    Roboto, Noto, Avenir;
}
/*
body::-webkit-scrollbar {
  background-color: #0066ff;
  width: 0.5em;
  height: 0.00002em !important;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: #000000;
  outline: 3px solid #0066ff;
}*/
.v-btn.cat {
  display: inline-block;
  padding: 0 !important;
  min-width: 5px !important;
  background-image: linear-gradient(#000, #000);
  background-position: 0 100%;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}

.v-btn.cat:hover {
  background-position: 100% 100%;
  background-size: 100% 2px;
}
</style>
