<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class="album py-5 bg-light">
      <h1 class="text-gray mb-5 fs-1 ">Nos Formations</h1>
      <hr class="featurette-divider mb-5" />
      <div class="container">
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-5"
        >
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/OrongeUL/Workchat-amico.svg" height="300"   alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en Communication
                </p>
              </div>
            </div>
          </div>
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img
                src="../assets/OrongeUL/BusinessPlan-cuate.svg"
                height="300"
                alt=""
              />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en finance, comptabilité et assurance
                </p>
              </div>
            </div>
          </div>
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/OrongeUL/Projections-amico.svg" height="300"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en Gestion des ressources humaines
                </p>
              </div>
            </div>
          </div>

          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/OrongeUL/Dronesurveillance-amico.svg" height="270"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en Qualité, Hygiène, Sécurité et Environnement
                  (QHSE)
                </p>
              </div>
            </div>
          </div>
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/OrongeUL/Team-pana.svg" height="270"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en Management
                </p>
              </div>
            </div>
          </div>
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/OrongeUL/Attheoffice-bro.svg" height="270"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en Technologie de l’Information et de Communication
                  ( TIC)
                </p>
              </div>
            </div>
          </div>

          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/marketing.png"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en techniques de Vente et Marketing
                </p>
              </div>
            </div>
          </div>
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/MainPic.png"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en sécurité routière
                </p>
              </div>
            </div>
          </div>
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/driving.png"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation des Conducteurs routiers
                </p>
              </div>
            </div>
          </div>

          
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/OrongeUL/Telecommuting-rafiki.png"   alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation de reconversion
                </p>
              </div>
            </div>
          </div>
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/OrongeUL/Pairprogramming-pana.svg" height="270" alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en Informatique
                </p>
              </div>
            </div>
          </div>

          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/systeminfo.png"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en Management des systèmes d’Information
                </p>
              </div>
            </div>
          </div>
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/OrongeUL/Memorystorage-amico.svg"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en Bases de données et Big Data
                </p>
              </div>
            </div>
          </div>
          <div class="col card_formation">
            <div class="card shadow-sm">
              <img
                src="../assets/ai-article-5enablers.png"
                
                alt=""
              />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en Business Intelligence
                </p>
              </div>
            </div>
          </div>

          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/OrongeUL/Team-bro.svg"  alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation en gestion des Projets
                </p>
              </div>
            </div>
          </div>

          <div class="col card_formation">
            <div class="card shadow-sm">
              <img src="../assets/gne.jpg"   alt="" />

              <div class="card-body">
                <p class="card-text fs-4">
                  Formation industrielle (Dessin industriel : bâtiment, Génie
                  Civil, électrique, Electronique mécanique, Maintenance,
                  automatisme, Froid et climatisation)
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
  name: "Formations",
  data() {
    return {
      titre: "NOS FORMATIONS",
    };
  },

  components: {
    AppSection,
  },
};
</script>

<style lang="scss" scoped>
// .card_info {
//   background: rgb(35, 138, 145);
//   background: linear-gradient(
//     193deg,
//     rgba(35, 138, 145, 1) 3%,
//     rgba(30, 157, 166, 1) 13%,
//     rgba(70, 175, 182, 1) 28%,
//     rgba(111, 191, 196, 1) 40%,
//     rgba(250, 250, 250, 1) 57%,
//     rgba(255, 255, 255, 1) 100%
//   );
// }

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
  .card-text{
    color: #266874;
  }
}
</style>
