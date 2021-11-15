<template>
  <div class=" overflow-hidden">
    <AppSection :titre="titre" />
    <div class=" py-5 card_info">
      <div class="container-fluid">
        <div class="row justify-centant-center align-items-center ">
          <div class=" col-12  row   align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12  ">
              <div
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
              >
                <img src="../assets/formationQui.png" width="670" alt="" />
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 "
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div class="p-3 info_d text-start fs-5">
                <img src="../assets/info.png" width="50" alt="" />
                <h3 class="my-3 h3-one">
                  Vous cherchez à développer vos compétences et améliorer la
                  compétitivité de votre entreprise ?
                </h3>

                <p class="fs-3">
                  La formation est le moyen idéal pour y aboutir, elle constitue
                  l’un des principaux leviers de management de votre capital
                  humain.
                </p>
              </div>
            </div>
          </div>

          <div class=" col-12  row   align-items-center">
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 "
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div>
                <img
                  src="../assets/OrongeUL/BusinessPlan-bro.svg"
                  width="400"
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1  "
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div class="p-3 info_d text-start fs-5 ">
                <img src="../assets/info.png" width="50" alt="" />
                <h3 class="my-3 h3-one">
                  Vous cherchez l’outil essentiel d’évolution de votre
                  entreprise ?
                </h3>

                <p class="fs-3">
                  Le meilleur moyen c’est d’adopter une meilleure prise en
                  charge de la formation de vos collaborateurs.
                </p>
              </div>
            </div>
          </div>

          <div class=" col-12  row   align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1  ">
              <div
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
              >
                <img src="../assets/OrongeUL/Team-bro.svg" width="480" alt="" />
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 "
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div class="p-4 info_d text-start fs-5">
                <img src="../assets/info.png" width="50" alt="" />
                <h3 class="my-3 h3-one">
                  Vous voulez faire de votre entreprise une entreprise innovante
                  ?
                </h3>

                <p class="fs-3">
                  Attachez de l’importance à la formation de vos employés.
                </p>
              </div>
            </div>
          </div>

          <div class=" col-12  row   align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12  order-lg-2">
              <div
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
              >
                <img
                  src="../assets/OrongeUL/Team-pana.svg"
                  width="550"
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12  order-lg-1"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div class="p-3 info_d text-start fs-5">
                <img src="../assets/info.png" width="50" alt="" />
                <h3 class="my-3 h3-one">
                  Vous voulez générer de la valeur ajoutée dans votre entreprise
                  et atteindre les objectifs visés ?
                </h3>

                <p class="fs-3">
                  La formation est l’investissement le plus sûr pour y arriver .
                </p>
              </div>
            </div>
          </div>

          <div class=" col-12  row   align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1  ">
              <div
                class="img-dev"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
              >
                <img
                  src="../assets/OrongeUL/Attheoffice-amico.svg"
                  width="500"
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 item-5 order-lg-2 "
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div class="p-3 info_d text-start fs-5 ">
                <img src="../assets/info.png" width="50" alt="" />
                <h3 class="my-3 h3-one">
                  Vous cherchez à contribuer à la progression des performances
                  du capital humain de votre entreprise ?
                </h3>

                <p class="fs-3">
                  Adopter une politique de formation continue est la solution.
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
  name: "Formation",
  data() {
    return {
      titre: "FORMATION",
    };
  },

  components: {
    AppSection,
  },
  methods: {
    calculate(element, nb) {
      var div = document.getElementById(element),
        i = 0;
      div.innerHTML = i;

      setInterval(function() {
        i++;
        if (i <= nb) div.innerHTML = i;
      }, 1);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.card_info {
  background: rgb(35, 138, 145);
  background: linear-gradient(
    193deg,
    rgba(35, 138, 145, 1) 3%,
    rgba(30, 157, 166, 1) 13%,
    rgba(70, 175, 182, 1) 28%,
    rgba(111, 191, 196, 1) 40%,
    rgb(226, 226, 226) 57%,
    rgb(236, 236, 236) 100%
  );

  .info_d {
    margin: 10px;
    background: rgba(255, 255, 255, 0.719);
    min-height: 300px;
    border-radius: 3px;
    z-index: 100;
    p {
      color: rgb(83, 83, 83);
    }
  }
  .img-dev {
    img {
      border-radius: 40px;
    }
  }

  .item-5 {
    margin-top: 40px;
  }
}

.h3-one {
  font-family: Poppins;
  font-size: 24px;
  color: rgb(253, 101, 0);
}
</style>
