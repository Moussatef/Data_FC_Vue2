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
            <div class="accordion-body">
              <div class="row">
                <div class="col-lg-3" :key="i" v-for="(tr, i) in cat.formation">
                  <div class=" card_formation">
                    <div class="card shadow-sm">
                      <img src="../assets/commn.png" height="225" alt="" />

                      <div class="card-body">
                        <p class="card-text fs-3">
                          {{ tr.titre }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    };
  },
  methods: mapActions(["getAllFormationEn", "getAllCategories"]),

  computed: mapGetters(["formationEnt", "categories"]),

  components: {
    AppSection,
  },

  methods: {},
  mounted() {
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped>
.card_formation {
  transition: transform 250ms;
  overflow: hidden;
  .card {
    overflow: hidden;
  }
  img {
    transition: transform 250ms;
    overflow: hidden;
  }
  &:hover {
    transform: translateY(-13px);
    cursor: pointer;
    img {
      transform: scaleX(1.2);
    }
  }
}
</style>
