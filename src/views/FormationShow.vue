<template>
  <div class=" overflow-hidden position-relativ bg-light">
    <div class="mt-5"></div>
    <h2>
      Formation
    </h2>
    <!-- <vs-alert closable v-model="active">
      <template #title>
        Vuesax Framework
      </template>
      
    </vs-alert> -->
<<<<<<< HEAD
    <vs-button size="xl" @click="$router.go(-1)" border shadow square>
     
     <i class="bi bi-arrow-bar-left me-2"></i> Revenir </vs-button>
=======
    <vs-button border flat>
     <i class="bx bxs-phone-call"></i>
     Default </vs-button>
>>>>>>> ff82be1de9ac8dd2b888e8afbd7fa9ac52b24af6
    <div v-if="formation" class="container-fluid bg-white p-5 my-5">
      <div class="row justify-content-evenly ">
        <div
          class="col-3 card border-0 shadow justify-content-center align-items-center "
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
        <div class="col-8 row text-start">
          <div class="col-12 row   align-items-start ">
            <div class="col-lg-5">
              <p><b>Code Formation :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.codeF }}
              </p>
            </div>
          </div>
          <div class="col-12 row   align-items-start">
            <div class="col-lg-5">
              <p><b>Titre :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.titre }}
              </p>
            </div>
          </div>
          <div class="col-12 row   align-items-start">
            <div class="col-lg-5">
              <p><b>Objectifs :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.objectifs }}
              </p>
            </div>
          </div>
          <div class="col-12 row   align-items-start">
            <div class="col-lg-5">
              <p><b>Population cible :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.population_cible }}
              </p>
            </div>
          </div>

          <div class="col-12 row   align-items-start">
            <div class="col-lg-5">
              <p><b>Durée de la formation:</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.duree_dormation }}
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
    </div>
    <div v-else>
      <img src="../assets/OrongeUL/Questions-cuate.png" width="600" alt="" />
      <h2>La formation n'existe pas</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FormationShow",
  data: function() {
    return {
      id: this.$route.params.id,
      active: true,
    };
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
