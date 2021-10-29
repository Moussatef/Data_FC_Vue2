<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class=" py-5 bg-light">
      <div class="accordion accordion-flush m-5" id="accordionFlushExample">
        <div class="accordion-item" :key="x" v-for="(cat, x) in categories">
          <h2 class="accordion-header " :id="'flush-headingOne' + cat.codeF">
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
            class="accordion-collapse collapse "
            :class="{ show: cat.id == 1 }"
            :aria-labelledby="'flush-headingOne' + cat.codeF"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body p-3">
              <div
                class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 m-3 justify-content-center"
              >
                <div
                  class="col card_formation"
                  :key="i"
                  v-for="(tr, i) in cat.formation"
                >
                  <div class="card shadow-sm" @click="showFormation(tr)">
                    <img
                      :src="'http://127.0.0.1:8000' + tr.imgFormation"
                      height="300"
                      alt=""
                    />

                    <div class="card-body">
                      <p class="card-text fs-4">
                        {{ tr.titre }}
                      </p>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-lg-3" :key="i" v-for="(tr, i) in cat.formation">
                  <div @click="showFormation(tr)" class=" card_formation">
                    <div class="card shadow-sm">
                      <img
                        :src="'http://127.0.0.1:8000' + tr.imgFormation"
                        height="225"
                        alt=""
                      />

                      <div class="card-body">
                        <p class="card-text fs-3">
                          {{ tr.titre }}
                        </p>
                      </div>
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppSection from "@/components/inc/AppSection.vue";

export default {
  name: "FormationEn",
  data() {
    return {
      titre: "Formations Interentreprises",
      active2: false,
      formationShow: undefined,
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
    ...mapGetters(["formationEnt", "categories"]),
  },

  components: {
    AppSection,
  },

  mounted() {
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped>
.card_formation {
  transition: transform 250ms;
  overflow: hidden;
  transition: 0.8s;

  .card {
    overflow: hidden;
    min-height: 500px;
    border-bottom: none;
    border-top: none;
    border-right: solid 1px rgb(255, 123, 0);
    border-left: solid 1px rgb(255, 123, 0);
    border-radius: 15px;
    transition: 0.6s;
    &:hover {
      border-right: solid 2px rgb(36, 110, 112);
      border-left: solid 2px rgb(36, 110, 112);
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
    cursor: pointer;
    transition: 0.8s;

    img {
      transform: scaleX(1.2);
      transition: 0.8s;
    }
  }
  .card-text {
    color: #266874;
  }
}
</style>
