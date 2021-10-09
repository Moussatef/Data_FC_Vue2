<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class=" py-5 bg-light">
      <div class="accordion accordion-flush m-5" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header " id="flush-headingOne">
            <button
              class="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              DFC 1 : GRH et Management
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-lg-4">
                  <div class=" card_formation">
                    <div class="card shadow-sm">
                      <img src="../assets/commn.png" height="225" alt="" />

                      <div class="card-body">
                        <p class="card-text fs-3">
                          Formation en Communication
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 ">
                  <div class=" card_formation ">
                    <div class="card shadow-sm">
                      <img
                        src="../assets/Teamwork_Illustration.jpg"
                        height="225"
                        alt=""
                      />

                      <div class="card-body">
                        <p class="card-text fs-3">
                          Formation en finance, comptabilité et assurance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class=" card_formation">
                    <div class="card shadow-sm">
                      <img src="../assets/mang.jpg" height="225" alt="" />

                      <div class="card-body">
                        <p class="card-text fs-3">
                          Formation en Management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              DFC 2 : Formation
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              DFC 3: Qualité-Santé-Sécurité-Environnement(QSSE)
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFore">
            <button
              class="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFore"
              aria-expanded="false"
              aria-controls="flush-collapseFore"
            >
              DFC 4 : Formation en finance comptabilité et assurance
            </button>
          </h2>
          <div
            id="flush-collapseFore"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFore"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFive">
            <button
              class="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              DFC 5 : Communication
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
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
  name: "FormationEn",
  data() {
    return {
      titre: "Formations Interentreprises",
    };
  },

  components: {
    AppSection,
  },

  methods: {},
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
