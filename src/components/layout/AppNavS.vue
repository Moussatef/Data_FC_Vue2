<template>
  <div class="hidden position-fixed">
    <vs-sidebar
      hover-expand
      reduce
      v-model="active"
      style="padding-top:70px"
      class=""
      open
    >
      <template style="margin-top:80px;" #logo>
        <img :src="auth.image" alt="" />
      </template>
      <vs-sidebar-item to="/info-client" :class="{'active' : activelink == 'ClientInfo' }" id="home">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class="bx bx-grid-alt"></i>
        </template>
        Market Overview
      </vs-sidebar-item>
      <!-- <vs-sidebar-item id="Music">
        <template #icon>
          <i class="bx bxs-music"></i>
        </template>
        Music
      </vs-sidebar-item> -->
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group"></i>
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram"></i>
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter"></i>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <i class="bx bxl-facebook"></i>
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-item to="/client-favorite-formation" :class="{'active' : activelink == 'ClientFavorite' }" id="ClientFavorite">
        <template #icon>
          <i class="bx bxs-donate-heart"></i>
        </template>
        Formations Préféré
      </vs-sidebar-item>

      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class="bx bxs-shopping-bags"></i>
        </template>
        Shopping
      </vs-sidebar-item>

      <template #footer>
        <vs-row justify="space-between">
          <!-- <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar> -->

          <!-- <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge>
              28
            </template>
          </vs-avatar> -->
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppNavS",
  props: ['activelink'],
  data: () => {
    return {
      active: this.activelink,
      host: "http://127.0.0.1:8000",
    };
  },
  computed: {
    ...mapGetters(["auth", "loading"]),
  },
};
</script>

<style lang="scss" scoped>
.mt-10 {
  margin-top: 10rem;
}

.mt-20 {
  margin-top: 10rem;
}
</style>
