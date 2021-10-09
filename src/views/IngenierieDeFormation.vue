<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class="  bg-light">
      <div class=" container-fluid">
        <div class="row">
          <div class="col-12 row bg-white overflow-hidden">
            <div class="col-lg-4 my-3">
              <img src="../assets/learning1.png" width="300" alt="" />
            </div>
            <div class="col-lg-6 info-one">
              <div class="col-lg-8 col-12">
                <p class="fs-4 text-start">
                  Les actions de formation continue n’ont de sens que si elles
                  sont étroitement intégrées dans un processus visant l'atteinte
                  des orientations stratégiques de l’entreprise (ou de
                  l’organisation)
                </p>
              </div>
            </div>
            <hr class="featurette-divider" />
          </div>
          <div class="col-12 row bg-white overflow-hidden py-5 ">
            <div class="col-lg-6 mb-5">
              <img src="../assets/effct.png" width="300" alt="" />
            </div>
            <div class="col-lg-6 info-two mb-5">
              <div class="col-lg-8 col-12">
                <p class="fs-4 text-start">
                  Pour rendre la formation rentable, efficace et utile, il est
                  très recommandé de se donner le temps, les moyens et la
                  capacité d’effectuer un diagnostic des besoins en formation
                  afin de ne pas gaspiller le temps, l’énergie et l’argent.
                </p>
              </div>
            </div>
            <hr class="featurette-divider" />
          </div>
          <div class="col-12 row bg-white overflow-hidden">
            <div class="col-lg-4 offset-lg-2 my-4">
              <img src="../assets/systeminfo.png" width="300" alt="" />
            </div>
            <div class="col-lg-4 offset-lg-2 info-three">
              <div class="col-lg-11 col-12">
                <p class="fs-4 text-start">
                  C’est dans cette optique que nous vous proposons dans le cadre
                  d’une action d’ingénierie, des interventions de spécialistes
                  pour mettre en œuvre un processus de diagnostic des besoins,
                  allant de l’analyse des besoins, la conception d’un plan de
                  formation à la réalisation et l’évaluation de la formation.
                </p>
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
      titre: "Ingénierie de formation",
    };
  },

  components: {
    AppSection,
  },
};
</script>
<style lang="scss" scoped>
.info-one {
  p {
    margin-top: 12%;
    color: rgb(107, 107, 107);
    text-align:initial;
    text-justify: inter-word;
  }
}
.info-two {
  p {
    margin-top: 1%;
    color: rgb(107, 107, 107);
    text-align: justify;
    text-justify: inter-word;
  }
}
.info-three {
  p {
    margin-top: 3%;
    color: rgb(107, 107, 107);
    text-align: justify;
    text-justify: inter-word;
  }
}
</style>
