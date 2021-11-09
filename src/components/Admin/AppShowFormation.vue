<template>
  <div class="overflow-hidden position-relativ bg-light">
    <div class="mt-5"></div>
    <!-- <vs-alert closable v-model="active">
      <template #title>
        Vuesax Framework
      </template>
      
    </vs-alert> -->
    
    <div v-if="formation" class="container-fluid bg-white p-5 my-5">
      <div class="row justify-content-evenly">
        <div
          class="
            col-xl-3 col-lg-5 col-md-8 col-12
            card
            border-0
            shadow
            justify-content-center
            align-items-center
            my-4
          "
        >
          <img
            :src="formation.imgFormation"
            width="400"
            height="400"
            class="rounded-lg mt-2"
            alt=""
            id="src_formation"
          />
        </div>
        <div class="col-xl-8 col-lg-7 col-12 row text-start my-4">
          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Code Formation :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.codeF }}
              </p>
            </div>
          </div>
          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Titre :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.titre }}
              </p>
            </div>
          </div>
          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Objectifs :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.objectifs }}
              </p>
            </div>
          </div>
          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Population cible :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.population_cible }}
              </p>
            </div>
          </div>

          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Durée de la formation:</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.duree_dormation }}
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
                v-for="(li, j) in formation.programme"
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
      <hr>

      <div class="row justify-content-center">
        <div class="col-lg-3 m-5">
          <div class="p-3 mb-4 shadow d-flex align-items-center justify-content-between">
            <p class="mt-2 me-2"> Ajouter bande annonce</p>
            <vs-button
              square
              color="#7d33ff"
              gradient
            >
              Ajouter <i class="bi bi-plus-circle-dotted ms-2"></i>
            </vs-button>
          </div>
          <div class="p-3 shadow d-flex align-items-center justify-content-between">
            <p class="mt-2 me-2"> Ajouter formation video </p>
            <vs-button
              square
              color="#7d33ff"
              gradient
            >
              Ajouter <i class="bi bi-plus-circle-dotted ms-2"></i>
            </vs-button>
          </div>
        </div>
        <div class="col-lg-8 col-12">
          <div class="accordion accordion-flush shadow m-5" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" :id="'flush-headingOne'">
                <button
                  class="accordion-button collapsed fs-4"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#flush-collapseOne'"
                  aria-expanded="false"
                  :aria-controls="'flush-collapseOne'"
                >
                  Bande annonce
                </button>
              </h2>
              <div
                :id="'flush-collapseOne'"
                class="accordion-collapse collapse"
                :aria-labelledby="'flush-headingOne'"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body p-3 row justify-content-center">
                  <div class="col-5">
                    <div class="card shadow">
                      <div class="card-body text-center">
                        <!-- <AppVimeo /> -->
                        <img src="../../assets/vimeo.png" width="400" alt="" />
                      </div>
                      <div class="card-footer d-flex justify-content-end">
                        <vs-button
                          @click="activeBD=true"
                          class=""
                          color="rgb(59,222,200)"
                        >
                          Visite
                        </vs-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" :id="'flush-headingTow'">
                <button
                  class="accordion-button collapsed fs-4"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#flush-collapseTow'"
                  aria-expanded="false"
                  :aria-controls="'flush-collapseTow'"
                >
                  Video
                </button>
              </h2>
              <div
                :id="'flush-collapseTow'"
                class="accordion-collapse collapse"
                :aria-labelledby="'flush-headingTow'"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body p-3 row justify-content-center">
                  <div class="col-5">
                    <div class="card shadow">
                      <div class="card-body text-center">
                        <!-- <AppVimeo /> -->
                        <img src="../../assets/vimeo.png" width="400" alt="" />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <vs-dialog width="1400px" not-center v-model="activeBD">
        <template #header>
          <h4 class="not-margin">Bande <b> annonce </b></h4>
        </template>

        <div class="container">
          <div class="row">
            <AppVimeo />
          </div>
        </div>

        <template #footer>
          <div class="d-flex  justify-content-end">
            <vs-button
              @click="
                activeBD = false;
              "
              transparent
            >
              Suivant
            </vs-button>
            <vs-button @click="activeBD = false" dark transparent>
              Annuler
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
    <div v-else>
      <img src="../../assets/OrongeUL/Questions-cuate.png" width="600" alt="" />
      <h2>La formation n'existe pas</h2>
    </div>
  </div>
</template>

<script>
import AppVimeo from "@/components/vimeo/AppVimeo.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FormationShow",
  props: ["formation_id"],
  data: function () {
    return {
      id: this.formation_id,
      active: true,
      activeBD:false,
    };
  },
  components: {
    AppVimeo,
  },
  methods: {
    ...mapActions(["formationParam", "getAllFormationEn"]),
  },
  computed: {
    ...mapGetters(["formation"]),
  },
  created() {
    this.formationParam(this.id);
  },
};
</script>
