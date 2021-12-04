<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />
    <div class="bg-light p-5">
      <div class="container-fluid bg-white p-3">
        <div class="row">
          <div class="col-12">
            <h2 class="h2-one text-center my-3 pb-5 fs-1">
              L’intérim est la solution idéale pour vous
            </h2>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="text-start m-5">
              <h3 class="h2-one fs-1">Vous êtes une entreprise et :</h3>
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
                      Vous avez des besoins ponctuels en termes de
                      qualifications ou de personnel ?
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
                      Vous cherchez à gérer des besoins non planifiés en main
                      d’œuvre ?
                    </p>
                  </li>
                  <li class="d-flex justify-content-start align-items-start">
                    <img
                      src="../assets/check-mark.png"
                      width="26"
                      class="me-3"
                      alt=""
                    />
                    <p class="fs-4">Vous voulez gérer l’imprévisible ?</p>
                  </li>
                  <li class="d-flex justify-content-start align-items-start">
                    <img
                      src="../assets/check-mark.png"
                      width="26"
                      class="me-3"
                      alt=""
                    />
                    <p class="fs-4">
                      Vous voulez gagner du temps et diminuer les risques ?
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
                      Vous voulez limiter votre masse salariale et réduire les
                      formalités administratives ?
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12 col-12">
            <div class="m-t">
              <img src="../assets/business.png" width="500" alt="" />
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
      titre: "L'INTERIM POUR L'ENTREPRISE",
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