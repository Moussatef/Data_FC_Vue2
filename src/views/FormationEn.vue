<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class="pb-5 bg-light">
      <div class="accordion accordion-flush mx-1" id="accordionFlushExample">
        <div class="accordion-item" :key="x" v-for="(cat, x) in categories">
          <h2 class="accordion-header" :id="'flush-headingOne' + cat.codeF">
            <button
              class="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#flush-collapseOne' + cat.codeF"
              aria-expanded="false"
              :aria-controls="'flush-collapseOne' + cat.codeF"
            >
              {{ cat.codeF }} : {{ cat.titre }}
            </button>
          </h2>
          <div
            :id="'flush-collapseOne' + cat.codeF"
            class="accordion-collapse collapse"
            :class="{ show: cat.id == 1 }"
            :aria-labelledby="'flush-headingOne' + cat.codeF"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body p-3">
              <div
                class="
                  row
                  row-cols-1
                  row-cols-md-1
                  row-cols-lg-2
                  row-cols-xl-3
                  row-cols-xxl-4
                  g-5
                  justify-content-center
                "
              >
                <div :key="i" v-for="(tr, i) in cat.formation">
                  <v-card
                    max-width="374"
                    class="mx-auto my-4 text-start card-form"
                    data-aos="zoom-out-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                  >
                    <template slot="progress">
                      <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                      ></v-progress-linear>
                    </template>

                    <v-img height="250" :src="tr.imgFormation"></v-img>

                    <v-card-title>{{ tr.titre }}</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0 mb-5">
                        <v-rating
                          :value="5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        ></v-rating>

                        <!-- <div class="grey--text ms-3 mb-5">4.5 (413)</div> -->
                      </v-row>

                      <!-- <div class="my-4 text-subtitle-1">
                          $ • Italian, Cafe
                           </div> -->

                      <div>
                        <b>Objectifs </b>{{ tr.objectifs}}
                      </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-actions
                      class="justify-content-start align-items-center"
                    >
                      <vs-button
                        class="py-1"
                        square
                        @click="
                          activeVd = true;
                          formationShow = tr;
                        "
                        gradient
                      >
                        bande annonce
                      </vs-button>
                      <div v-if="auth.role == 'client'">
                        <vs-button
                          v-if="tr.block == 0"
                          flat
                          icon
                          color="danger"
                          border
                        >
                          <i class="bi bi-star"></i>
                        </vs-button>
                        <vs-button
                          v-if="tr.block == 1"
                          icon
                          color="danger"
                          border
                          active
                        >
                          <i class="bi bi-star-fill"></i>
                        </vs-button>
                      </div>

                      <v-btn
                        elevation="1"
                        class="p-3"
                        color="deep-purple lighten-2 p-1"
                        text
                      >
                        Réserve
                      </v-btn>
                      <!--  -->
                    </v-card-actions>
                  </v-card>
                </div>
                <!-- <div
                  class="col card_formation"
                  data-aos="zoom-out-down"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                  :key="i"
                  v-for="(tr, i) in cat.formation"
                >
                  <div class="card shadow">
                    <img :src="tr.imgFormation" height="300" alt="" />

                    <div class="card-body">
                      <p class="card-text fs-4">
                        {{ tr.titre }}
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                     
                      <vs-button
                        @click="showFormation(tr)"
                        class=""
                        color="rgb(59,222,200)"
                      >
                        Visite
                      </vs-button>
                      
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <vs-dialog
        v-if="formationShow"
        width="1400px"
        not-center
        v-model="activeVd"
      >
        <template #header>
          <h4 class="not-margin">Bande <b> annonce </b></h4>
        </template>

        <div class="container">
          <div class="row" v-if="formationShow.trailer">
            <AppVimeo :id_video="formationShow.trailer.videoID" />
          </div>
        </div>

        <template #footer>
          <div class="d-flex justify-content-end">
            <vs-button
              @click="
                active2 = true;
                activeVd = false;
              "
              transparent
            >
              Suivant
            </vs-button>
            <vs-button @click="activeVd = false" dark transparent>
              Annuler
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
        <div class="row justify-content-between">
          <div
            class="
              col-xxl-4 col-xl-8 col-lg-12 col-12
              card
              border-0
              shadow
              justify-content-center
              align-items-center
              my-4
              mx-ms-auto
            "
          >
            <img
              :src="formationShow.imgFormation"
              width="400"
              height="400"
              class="rounded-lg mt-2"
              alt=""
              id="src_formation"
            />
          </div>
          <div class="col-xxl-8 col-xl-12 col-lg-12 col-12 row text-start my-4">
            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Code Formation :</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.codeF }}
                </p>
              </div>
            </div>
            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Titre :</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.titre }}
                </p>
              </div>
            </div>
            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Objectifs :</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.objectifs }}
                </p>
              </div>
            </div>
            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Population cible :</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.population_cible }}
                </p>
              </div>
            </div>

            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Durée de la formation:</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.duree_dormation }}
                </p>
              </div>
            </div>

            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
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
          <div class="d-flex justify-content-end">
            <vs-button @click="active2 = false" transparent>
              Acheter
            </vs-button>
            <vs-button @click="active2 = false" dark transparent>
              Annuler
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppSection from "@/components/inc/AppSection.vue";
import AppVimeo from "@/components/vimeo/AppVimeo.vue";

export default {
  name: "FormationEn",
  data() {
    return {
      titre: "Formations Interentreprises",
      active2: false,
      formationShow: undefined,
      btnactive: false,
      activeVd: false,
    };
  },
  methods: {
    ...mapActions(["getAllFormationEn", "getAllCategories"]),
    showFormation(formation) {
      this.formationShow = formation;
      this.active2 = true;
    },
  },

  computed: {
    ...mapGetters(["formationEnt", "categories", "auth", "loading"]),
  },

  components: {
    AppSection,
    AppVimeo,
  },

  mounted() {
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped>
.vs-dialog {
  background: rgba(var(--vs-background), 1);
  color: rgba(var(--vs-text), 1);
  position: relative;
  min-width: 400px;
  border-radius: var(--vs-radius);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  max-width: 1800px;
  margin: auto;
}
.video--player__vid {
  width: 100%;
  height: 600px;
  z-index: 0;
}
.card-form {
  min-height: 620px;
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
    // &:hover {
    //   border: solid 2px rgba(51, 161, 165, 0.486);
    //   // border-left: solid 2px rgb(36, 110, 112);
    //   transition: 0.6s;
    // }
  }
  img {
    transition: transform 250ms;
    overflow: hidden;
    transition: 0.8s;
    &:hover {
      // transform: translateY(-13px);
      // // cursor: pointer;
      // transition: 0.8s;

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
      #2c968d7a 100%
    ) !important;
  }
}
</style>
