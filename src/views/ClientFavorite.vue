<template>
  <div>
    <div v-if="auth.role == 'client'" class=" overflow-hidden bg-light">
      <div class="mt-4"></div>
      <AppNavS class="nav_z poition-fixed" />
      <div class="content ">
        <div class="top-navbar position-fixed  ">
          <div class="bx bx-menu btn_nav" @click="menu()"></div>
        </div>
        <h1 class="my-5 ">Les Formations Préféré</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 m-3 justify-content-center ">
          <div
            class="col card_formation"
            :key="i"
            v-for="(tr, i) in auth.favorit"
          >
            <!-- v-if="!tr.block" -->
            <div class="card shadow">
              <img
                :src="'http://127.0.0.1:8000' + tr.formation[0].imgFormation"
                height="300"
                alt=""
              />

              <div class="card-body">
                <p class="card-text fs-4">
                  {{ tr.formation[0].titre }}
                </p>
              </div>
              <div class="card-footer  d-flex justify-content-end ">
                <vs-button class="fs-6" @click="activeVd=true" gradient>
                  bande annonce
                </vs-button>
                <vs-button
                  @click="showFormation(tr.formation[0])"
                  class="fs-6"
                  color="rgb(59,222,200)"
                  gradient
                >
                  Visite
                </vs-button>
              </div>
            </div>
          </div>
        </div>
        <vs-dialog width="1400px" not-center v-model="activeVd">
          <template #header>
            <h4 class="not-margin">Bande <b> annonce </b></h4>
          </template>

          <div class="container">
            <div class="row">
              <iframe
                class="video--player__vid"
                allowfullscreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="YouTube video player"
                src="https://www.youtube.com/embed/4e4PxhRcxHw?rel=0&amp;controls=2&amp;disablekb=0&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.jechoisismontreal.com&amp;widgetid=1"
                id="widget2"
                data-gtm-yt-inspected-11225346_44="true"
                width="640"
                height="390"
                frameborder="0"
              ></iframe>
            </div>
          </div>

          <template #footer>
            <div class="d-flex  justify-content-end">
              <vs-button @click="activeVd = false" transparent>
                Ok
              </vs-button>
              <vs-button @click="activeVd = false" dark transparent>
                Cancel
              </vs-button>
            </div>
          </template>
        </vs-dialog>

        <vs-dialog
          v-if="formationShow"
          width="1600px"
          not-center
          v-model="active2"
        >
          <template #header>
            <h4 class="not-margin">Formations<b> Interentreprises </b></h4>
          </template>
          <div class="row justify-content-evenly">
            <div
              class="col-3 card border-0 shadow justify-content-center align-items-center "
            >
              <img
                :src="'http://127.0.0.1:8000' + formationShow.imgFormation"
                width="400"
                height="400"
                class="rounded-lg mt-2"
                alt=""
                id="src_formation"
              />
            </div>
            <div class="col-8 row text-start">
              <div class="col-12 row   align-items-start ">
                <div class="col-lg-5">
                  <p><b>Code Formation :</b></p>
                </div>
                <div class="col-lg-7">
                  <p>
                    {{ formationShow.codeF }}
                  </p>
                </div>
              </div>
              <div class="col-12 row   align-items-start">
                <div class="col-lg-5">
                  <p><b>Titre :</b></p>
                </div>
                <div class="col-lg-7">
                  <p>
                    {{ formationShow.titre }}
                  </p>
                </div>
              </div>
              <div class="col-12 row   align-items-start">
                <div class="col-lg-5">
                  <p><b>Objectifs :</b></p>
                </div>
                <div class="col-lg-7">
                  <p>
                    {{ formationShow.objectifs }}
                  </p>
                </div>
              </div>
              <div class="col-12 row   align-items-start">
                <div class="col-lg-5">
                  <p><b>Population cible :</b></p>
                </div>
                <div class="col-lg-7">
                  <p>
                    {{ formationShow.population_cible }}
                  </p>
                </div>
              </div>

              <div class="col-12 row   align-items-start">
                <div class="col-lg-5">
                  <p><b>Durée de la formation:</b></p>
                </div>
                <div class="col-lg-7">
                  <p>
                    {{ formationShow.duree_dormation }}
                  </p>
                </div>
              </div>

              <div class="col-12 row   align-items-start">
                <div class="col-lg-5">
                  <p><b>Programme de formation :</b></p>
                </div>
                <div class="col-lg-7">
                  <div
                    class="d-flex align-items-start"
                    :key="j"
                    v-for="(li, j) in formationShow.programme"
                  >
                    <i class="fa fa-check mt-1 me-3" aria-hidden="true"></i>
                    <p>
                      {{ li.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <template #footer>
            <div class="d-flex  justify-content-end">
              <vs-button @click="active2 = false" transparent>
                Ok
              </vs-button>
              <vs-button @click="active2 = false" dark transparent>
                Cancel
              </vs-button>
            </div>
          </template>
        </vs-dialog>
      </div>
    </div>
    <div v-else-if="loading" class="box-loading" ref="content"></div>
    <div v-else>
      <h1>You don't have permission to this page</h1>
      <div>
        <img src="../assets/SvgUl/Questions-amico.svg" width="700" alt="" />
      </div>
      <router-link
        to="/"
        type="button"
        class="btn btn-outline-secondary btn-lg"
      >
        <i class="bi bi-arrow-bar-left"></i>return back
      </router-link>
    </div>
  </div>
</template>

<script>
import AppNavS from "@/components/layout/AppNavS.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ClientFavorite",
  components: {
    AppNavS,
  },
  data: function() {
    return {
      active2: false,
      formationShow: undefined,
      btnactive: false,
      activeVd: false,
    };
  },
  computed: {
    ...mapGetters(["auth", "loading"]),
  },
  methods: {
    showFormation(formation) {
      this.formationShow = formation;
      this.active2 = true;
    },
    menu() {
      let sidenavbar = document.querySelector(".side-navbar");
      let content = document.querySelector(".content");
      sidenavbar.classList.toggle("active");
      content.classList.toggle("active");
    },
    openLoading() {
      const loading = this.$vs.loading({
        text: "Loading",
        color: "#d5397b",
        circles,
      });
      // setTimeout(() => {
      //   loading.close();
      // }, 3000);
    },
    closeLoading() {
      const loading = this.$vs.loading({
        target: this.$refs.content,
        text: "Loading..",
        color: "#257579",
        type: "circles",
      });
      setTimeout(() => {
        loading.close();
      }, 1000);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.video--player__vid {
  width: 100%;
  height: 600px;
  z-index: 0;
}
.card_formation {
  transition: transform 250ms;
  overflow: hidden;
  transition: 0.8s;

  .card {
    overflow: hidden;
    min-height: 500px;
    // border-bottom: none;
    // border-top: none;
    // border-right: solid 1px rgb(255, 123, 0);
    // border-left: solid 1px rgb(255, 123, 0);
    border: none;
    border-radius: 10px;
    transition: 0.6s;
    &:hover {
      border: solid 2px rgba(51, 161, 165, 0.486);
      // border-left: solid 2px rgb(36, 110, 112);
      transition: 0.6s;
    }
  }
  img {
    transition: transform 250ms;
    overflow: hidden;
    transition: 0.8s;
  }
  &:hover {
    transform: translateY(-13px);
    // cursor: pointer;
    transition: 0.8s;

    img {
      transform: scaleX(1.2);
      transition: 0.8s;
    }
  }
  .card-text {
    color: #266874;
  }
  .card-footer {
    background: linear-gradient(
      180deg,
      #ffffffd3 0%,
      #3f3f3f7a 100%
    ) !important;
  }
}
.top-10 {
  top: 5rem;
  position: sticky;
}
.mt-100 {
  margin-top: 100%;
}
.mt-20 {
  margin-top: 10%;
}
.status-card {
  min-height: 150px;
  margin-bottom: 20px;
}
// .hidden {
//   overflow-y: scroll;
// }
.content {
  position: relative;
  width: calc(100% - 200px);
  left: 200px;
  min-height: 100vh;
  transition: 0.5s ease;
}
.top-navbar {
  margin-top: 3.2rem;
  width: (rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 7px 20px;
}

#menu-icon {
  font-size: 34px;
  cursor: pointer;
  color: #fff;
}
.btn_nav {
  display: none;
  font-size: 34px;
  cursor: pointer;
  color: rgb(0, 0, 0);
}
.content.active {
  width: calc(100% - 60px);
  left: 60px;
}

@media (max-width: 868px) {
  .content {
    width: 100%;
    left: 0;
  }

  .content.active {
    width: calc(100% - 60px);
    left: 60px;
  }
  .btn_nav {
    display: block;
    margin-left: 10px;
  }

  #menu-icon {
    display: none;
  }
}
</style>
