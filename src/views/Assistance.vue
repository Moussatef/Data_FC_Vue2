<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />
    <div class="bg-light p-5 ">
      <h2 class="h2-one text-center my-3 pb-5">
        Le recrutement des compétences demande du temps, de la rigueur et de la
        méthode
      </h2>
      <div class=" container-fluid  position-relative">
        <div class="row  main-timeline">
          <div
            class=" col-lg-6 offset-lg-1   "
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="card mb-3 timeline-content">
              <div class="row g-0 justify-content-start align-items-center  ">
                <div class="col-md-4">
                  <img
                    src="../assets/SvgUl/pana1.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8 a">
                  <div class="card-body">
                    <h5 class="card-title text-end">01</h5>
                    <p class="card-text fs-4 ">
                      Disposant des outils et des compétences nécessaires, DATA
                      FC vous apporte conseil et soutien lors de votre processus
                      de recrutement pour vous aider dans le cadre de votre
                      stratégie de développement, à optimiser la gestion de vos
                      ressources humaines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class=" col-lg-6 offset-lg-6"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="card mb-3">
              <div class="row g-0 justify-content-start align-items-center">
                <div class="col-md-4">
                  <div>
                    <img
                      src="../assets/SvgUl/amico1.svg"
                      class="img-fluid rounded-start "
                      alt="..."
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title text-end">02</h5>
                    <p class="card-text fs-4">
                      Les conseillers de DATA FC adoptent les démarches et les
                      outils appropriés pour mener à bien l’action d’assistance
                      au recrutement pour votre entreprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="   col-lg-6 offset-lg-1 "
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="card mb-3">
              <div class="row g-0 justify-content-start align-items-center">
                <div class="col-md-4">
                  <img
                    src="../assets/SvgUl/cuate.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title text-end">03</h5>
                    <p class="card-text fs-4">
                      Partant de votre demande DATA FC peut intervenir pour tout
                      ou partie du processus de recrutement. De l’analyse des
                      taches et des missions relatives au poste à pourvoir, la
                      définition des profils du poste recherché à l’évaluation
                      et l’appréciation des candidats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class=" col-lg-6 offset-lg-6"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <div class="card mb-3">
              <div class="row g-0 justify-content-start align-items-center">
                <div class="col-md-4">
                  <img
                    src="../assets/SvgUl/bro.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title text-end">04</h5>
                    <p class="card-text fs-4">
                      Après chaque action de recrutement, DATA FC vous livre un
                      rapport détaillant les caractéristiques des profils des
                      candidats retenus et s’engage à faire le suivi de
                      recrutement pour s’assurer que l’intégration du candidat
                      dans le poste de travail se déroule bien
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
</template>

<script>
import AppSection from "@/components/inc/AppSection.vue";
export default {
  data() {
    return {
      titre: "ASSISTANCE CONSEIL EN RECRUTEMENT",
    };
  },

  components: {
    AppSection,
  },
};
</script>
<style lang="scss" scoped>
.card-title {
  font-size: 35px;
  color: rgb(177, 177, 177);
  border-bottom: 2px solid rgb(177, 177, 177);
}

.main-timeline::before {
  content: "";
  height: 95%;
  width: 2px;
  border: 2px dashed #34898f;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: 30px;
}

.card {
  min-height: 250px;
}
</style>
