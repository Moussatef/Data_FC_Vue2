<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class="bg-light text-wrap">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-12 row overflow-hidden my-5 justify-content-center  "
          >
            <div class="col-lg-6 order-lg-2">
              <img
                src="../assets/cover/info1.jpg"
                class="d-block mx-lg-auto img-fluid "
                alt="DATA FC"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6 info-one bg-white row align-items-center  ">
              <div class="col-lg-12 col-12 ">
                <p class="fs-4 text-start">
                  Les actions de formation continue n’ont de sens que si elles
                  sont étroitement intégrées dans un processus visant l'atteinte
                  des orientations stratégiques de l’entreprise
                  <br />
                  (ou de l’organisation)
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-12 row mb-5  overflow-hidden  justify-content-center  "
          >
            <div class="col-lg-6 ">
              <img
                src="../assets/cover/m2.jpg"
                class="d-block mx-lg-auto img-fluid"
                alt="DATA FC"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6 info-one bg-white row align-items-center  ">
              <div class="col-lg-12 col-12">
                <p class="fs-4 text-center">
                  Pour rendre la formation rentable, efficace et <br />utile, il
                  est très recommandé de se donner le temps, les moyens et la
                  capacité d’effectuer <br />
                  un diagnostic des besoins en formation afin <br />
                  de ne pas gaspiller le temps, <br />
                  l’énergie et l’argent.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 row  overflow-hidden mb-5 justify-content-center ">
            <div class="col-lg-6  order-lg-2">
              <img
                src="../assets/cover/m1.jpg"
                class="d-block mx-lg-auto img-fluid"
                alt="DATA FC"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6  info-one bg-white row align-items-center ">
              <div class="col-lg-12  col-12">
                <p class="fs-4 text-center">
                  C’est dans cette optique que nous vous proposons dans le cadre
                  d’une action d’ingénierie, des interventions de <br />
                  spécialistes pour mettre en œuvre un processus de diagnostic
                  des besoins, allant de l’analyse des besoins, la conception
                  d’un plan de formation à la réalisation et l’évaluation de la
                  formation.
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
  methods: {
  
  },

  components: {
    AppSection,
  },
};
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
  width: 100%;
}
.info-one {
  min-height: 400px;
  p {
    color: rgb(46, 145, 79);
    text-align: initial;
    text-justify:initial !important;
    
    
  }
}
.w-1\/2 {
  width: 50%;
}
.w-3\/4 {
  width: 75%;
}
.btn {
  font-weight: 700 !important;
  margin-top: 0.75rem !important;
  color: white;
  background-color: #307fc0 !important;
  border: 0;
  font-size: 1rem;
  border-radius: 0.25rem !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.rounded {
  border-radius: 0.25rem;
}
</style>
