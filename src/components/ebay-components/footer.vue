<template>
  <v-container fluid class="px-0 pt-16">
    <hr />
    <v-col class="pa-16">
      <div class="pa-5">
        <v-row class="d-flex justify-center">
          <v-col>
            <v-row> <h4 class="title py-2">Buy</h4></v-row>
            <v-row>
              <p class="pr-16">Registration</p>
              <p class="pr-16">eBay Money Back Guarantee</p>
              <p class="pr-16">Bidding &amp; buying help</p>
              <p class="pr-16">Stores</p>
            </v-row>
          </v-col>
          <v-col>
            <v-row> <h4 class="title py-2">Sell</h4></v-row>
            <v-row>
              <p class="pr-16">Start selling</p>
              <p class="pr-16">learn to sell</p>
              <p class="pr-16 mr-10">Affiliates</p>
            </v-row>
            <v-row> <h4 class="title py-2">Tools &amp; apps</h4></v-row>
            <v-row>
              <p class="pr-16">Developers</p>
              <p class="pr-16">Security center</p>
              <p class="pr-16">Site map</p>
            </v-row>
          </v-col>
          <v-col>
            <v-row> <h4 class="title py-2">Stay connected</h4></v-row>
            <v-row>
              <p class="pr-16">eBay's Blogs</p>
              <p class="pr-16">Facebook</p>
              <p class="pr-16 mr-10">Twitter</p>
            </v-row>
          </v-col>
          <v-col>
            <v-row> <h4 class="title py-2">About eBay</h4></v-row>
            <v-row>
              <p class="pr-16">Company info</p>
              <p class="pr-16 mr-10">News</p>
              <p class="pr-16">Investors</p>
              <p class="pr-16 mr-10">Careers</p>
              <p class="pr-16">Government relations</p>
              <p class="pr-16">Advertise with us</p>
              <p class="pr-16">Policies</p>
              <p class="pr-16">Verified Rights Owner (VeRO) Program</p>
            </v-row>
          </v-col>
          <v-col>
            <v-row> <h4 class="title py-2">Help &amp; Contact</h4></v-row>
            <v-row>
              <p class="pr-16">Seller Information Center</p>
              <p class="pr-16">Contact us</p>
            </v-row>
            <v-row> <h4 class="title py-2">Community</h4></v-row>
            <v-row>
              <p class="pr-16">Announcements</p>
              <p class="pr-16">Discussion boards</p>
              <p class="pr-16">eBay Giving Works</p>
            </v-row>
            <v-row> <h4 class="title py-2">eBay Sites</h4></v-row>
            <v-row>
              <v-btn
                tile
                depressed
                class="text-none"
                style="border: 1px solid grey"
              >
                <v-icon>mdi-us-flag</v-icon> Ethiopia
                <v-icon>mdi-chevron-down</v-icon></v-btn
              >
            </v-row>
          </v-col>
        </v-row>
        <v-row class="pt-10">
          <span style="font-size: 11px">
            <span class="black--text"
              >Copyright &copy; 1995-2021 eBay Inc. All Rights Reserved.</span
            >
            <u>Accessibility</u>, <u>User Agreement</u>, <u>Privacy</u>,
            <u>Cookies</u>,<u> Do not sell my personal information</u>
            <span class="black--text px-1" style="color: black">and</span>
            <u>AdChoice</u>
            <v-icon small>mdi-information-outline</v-icon>
          </span>
        </v-row>
      </div>
    </v-col>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  color: #767676 !important;
  cursor: pointer;
}

p {
  font-size: 12px;
  line-height: 1;
  display: block;
}
h4.title:hover,
p:hover {
  text-decoration: underline;
}
h4.title {
}
</style>