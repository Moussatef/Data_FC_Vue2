<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />
    <div class="bg-light p-5">
      <div class="container-fluid bg-white p-3">
        <div class="row">
          <div class="col-12">
            <h2 class="h2-one text-center my-3 pb-5">
              La clé de la réussite est de trouver un véritable partenaire
              d’externalisation
            </h2>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="text-start m-5">
              <h3 class="h2-one fs-1">Vous avez une entreprise :</h3>
              <div class="m-4">
                <ul class="list-inline mt-5">
                  <li class="d-flex justify-content-start align-items-start">
                    <img
                      src="../assets/check-mark.png"
                      width="26"
                      class="me-3"
                      alt=""
                    />
                    <p class="fs-4">
                      vous cherchez à vous concentrer sur votre cœur de métier ?
                    </p>
                  </li>
                  <li class="d-flex justify-content-start align-items-start">
                    <img
                      src="../assets/check-mark.png"
                      width="26"
                      class="me-3"
                      alt=""
                    />
                    <p class="fs-4">
                      Vous cherchez l’accès à des compétences nouvelles ou
                      supérieures, mais aussi de répondre aux évolutions
                      technologiques ?
                    </p>
                  </li>
                  <li class="d-flex justify-content-start align-items-start">
                    <img
                      src="../assets/check-mark.png"
                      width="26"
                      class="me-3"
                      alt=""
                    />
                    <p class="fs-4">
                      Vous cherchez la maîtrise et la réduction du budget relié
                      aux ressources humaines ?
                    </p>
                  </li>
                  <li class="d-flex justify-content-start align-items-start">
                    <img
                      src="../assets/check-mark.png"
                      width="26"
                      class="me-3"
                      alt=""
                    />
                    <p class="fs-4">
                      Vous cherchez à gagner en temps sur des fonctions
                      répétitives et contraignantes sans valeur ajoutée ?
                    </p>
                  </li>
                  <li class="d-flex justify-content-start align-items-start">
                    <img
                      src="../assets/check-mark.png"
                      width="26"
                      class="me-3"
                      alt=""
                    />
                    <p class="fs-4">
                      Vous cherchez à optimiser certains processus RH ?
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12 col-12">
            <div class="m-t">
              <img src="../assets/extantion.png" width="500" alt="" />
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
  name: "Lexternalisation",
  data() {
    return {
      titre: "L’EXTERNALISATION",
    };
  },

  components: {
    AppSection,
  },
};
</script>
<style lang="scss" scoped>
.m-t {
  margin-top: 8rem;
}
</style>
