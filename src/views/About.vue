<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />
    <div class="py-5 card_info">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-8 col-sm-12 col-12 row">
            <div>
              <img
                src="../assets/atlassian_0.png"
                width="900"
                height="700"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-8 col-sm-12 col-12 row">
            <div
              class="col-12 fs-6"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div class="p-3 info_d text-start">
                <img src="../assets/info.png" width="50" alt="" />
                <h3 class="my-3 h3-one fs-2">
                  Fondée en 2019, DATA FC est spécialisée dans
                </h3>

                <p class=" fs-4">
                  <i class="bi bi-check"></i>
                  L’Ingénierie de formation et l’assistance conseil en
                  recrutement
                </p>
                <p class=" fs-4"><i class="bi bi-check"></i> La Formation continue</p>
                <p class=" fs-4">
                  <i class="bi bi-check"></i>
                  L’Assistance conseil en création et pilotage des entreprises
                </p>
                <p class=" fs-4"><i class="bi bi-check"></i>L’Assistance technique dans le domaine informatique</p>
                <p class=" fs-4"><i class="bi bi-check"></i>Le placement ou l’externalisation de ressources humaines</p>
                <p class=" fs-4"><i class="bi bi-check"></i>Le Management des organisations</p>
                <p class=" fs-4"><i class="bi bi-check"></i>La Fourniture du personnel intérimaire</p>
              </div>
            </div>

            <div
              class="col-12 fs-6"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div class="p-4 info_d text-start">
                <img src="../assets/group.png" width="50" alt="" />
                <h3 class="my-3 h3-one fs-2">
                DATA FC dispose des outils particulièrement utiles et d’un
                  processus de gestion efficace pour
                </h3>
                <p class=" fs-4">
                  <i class="bi bi-check"></i>
                  Accompagner ses clients via une approche innovante à booster
                  les performances de leurs entreprises et à contribuer à la
                  réussite de leurs projets.
                </p>
                <p class=" fs-4">
                  <i class="bi bi-check"></i>
                  Proposer aux entreprises clientes des solutions efficaces
                  contribuant à leur évolution et à l’amélioration de leur
                  compétitivité, en faisant preuve d’éthique et de
                  confidentialité.
                </p>
                <p class=" fs-4">
                  <i class="bi bi-check"></i>
                  Entretenir une relation durable et personnalisée avec ses
                  clients, en faisant preuve de transparence et de disponibilité
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
  name: "about",
  data() {
    return {
      titre: "QUI SOMMES NOUS ?",
    };
  },

  components: {
    AppSection,
  },
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
  }
}
.h3-one {
  font-family: Poppins;
  font-size: 22px;
  color: rgba(35, 138, 145, 1);
}
</style>
