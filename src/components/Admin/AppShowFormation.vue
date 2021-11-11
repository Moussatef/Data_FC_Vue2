<template>
  <div class="overflow-hidden position-relativ bg-light">
    <div class="mt-5"></div>
    <!-- <vs-alert closable v-model="active">
      <template #title>
        Vuesax Framework
      </template>
      
    </vs-alert> -->

    <div v-if="formation" class="container-fluid bg-white p-5 my-5">
      <div class="row justify-content-between">
        <div
          class="
            col-xxl-4 col-xl-6 col-lg-8 col-12
            card
            border-0
            shadow
            justify-content-center
            align-items-center
            my-4
            mx-ms-auto
          "
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
        <div class="col-xl-8 col-lg-7 col-12 row text-start my-4">
          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Code Formation :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.codeF }}
              </p>
            </div>
          </div>
          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Titre :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.titre }}
              </p>
            </div>
          </div>
          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Objectifs :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.objectifs }}
              </p>
            </div>
          </div>
          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Population cible :</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.population_cible }}
              </p>
            </div>
          </div>

          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
              <p><b>Durée de la formation:</b></p>
            </div>
            <div class="col-lg-7">
              <p>
                {{ formation.duree_dormation }}
              </p>
            </div>
          </div>

          <div class="col-12 row align-items-start">
            <div class="col-lg-4">
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
      <hr />

      <div class="row justify-content-between">
        <div class="col-xxl-4 col-lg-12 col-12 my-5 row">
          <div
            class="
              col-lg-12 col-12
              p-3
              mb-4
              shadow
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <p class="mt-2 me-2">Ajouter bande annonce</p>
            <vs-button
              class="px-2"
              square
              color="#7d33ff"
              @click="varVideo.annanceAdd = true"
              gradient
            >
              Ajouter <i class="bi bi-plus-circle-dotted ms-2"></i>
            </vs-button>
          </div>
          <div
            class="p-3 shadow d-flex align-items-center justify-content-between"
          >
            <p class="mt-2 me-2">Ajouter formation video</p>
            <vs-button class="px-2" square color="#7d33ff" gradient>
              Ajouter <i class="bi bi-plus-circle-dotted ms-2"></i>
            </vs-button>
          </div>
        </div>
        <div class="col-xxl-8 col-lg-12 col-12 my-5">
          <div
            class="accordion accordion-flush shadow"
            id="accordionFlushExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" :id="'flush-headingOne'">
                <button
                  class="accordion-button collapsed fs-4"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#flush-collapseOne'"
                  aria-expanded="false"
                  :aria-controls="'flush-collapseOne'"
                >
                  Bande annonce
                </button>
              </h2>
              <div
                :id="'flush-collapseOne'"
                class="accordion-collapse collapse"
                :aria-labelledby="'flush-headingOne'"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body p-3">
                  <div
                    class="row justify-content-center"
                    v-if="formation.trailer"
                  >
                    <div class="col-5">
                      <div class="card shadow">
                        <div class="card-body text-center">
                          <!-- <AppVimeo /> -->
                          <img
                            src="../../assets/vimeo.png"
                            width="100"
                            alt=""
                          />
                        </div>
                        <div class="card-footer d-flex justify-content-end">
                          <vs-button
                            @click="videoAnnance(formation.trailer.videoID)"
                            class=""
                            color="rgb(59,222,200)"
                          >
                            Visite
                          </vs-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" :id="'flush-headingTow'">
                <button
                  class="accordion-button collapsed fs-4"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#flush-collapseTow'"
                  aria-expanded="false"
                  :aria-controls="'flush-collapseTow'"
                >
                  Video
                </button>
              </h2>
              <div
                :id="'flush-collapseTow'"
                class="accordion-collapse collapse"
                :aria-labelledby="'flush-headingTow'"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body p-3">
                  <div
                    class="row justify-content-center"
                    v-if="formation.videoFormation"
                  >
                    <div
                      class="col-5"
                      v-for="(vd, index) in formation.videoFormation"
                      :key="index"
                    >
                      <div class="card shadow">
                        <div class="card-body text-center">
                          <!-- <AppVimeo /> -->
                          <img
                            src="../../assets/vimeo.png"
                            width="100"
                            alt=""
                          />
                        </div>
                        <div class="card-footer d-flex justify-content-end">
                          <vs-button
                            @click="videoFormation(vd.videoID, vd.password)"
                            class=""
                            color="rgb(59,222,200)"
                          >
                            Visite
                          </vs-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Afficher video trailer -->
      <vs-dialog
        width="1000px"
        v-if="formation.trailer"
        not-center
        v-model="varVideo.annance"
      >
        <template #header>
          <h4 class="not-margin">Bande <b> annonce </b></h4>
        </template>

        <div class="container">
          <div class="row">
            <AppVimeo :id_video="annonceID" />
          </div>
        </div>

        <template #footer>
          <div class="d-flex justify-content-end">
            
            <vs-button @click="varVideo.annance = false" dark transparent>
              Annuler
            </vs-button>
          </div>
        </template>
      </vs-dialog>

      <!-- Afficher formation video -->
      <vs-dialog
        width="1400px"
        v-if="formation.videoFormation && varVideo.video_id"
        not-center
        v-model="formation"
      >
        <template #header>
          <h4 class="not-margin">Formation <b> video </b></h4>
        </template>
        <vs-alert class="text-center" closable v-model="active">
          <template #title> video mot de pass </template>
          {{ password }}
        </vs-alert>

        <div class="container my-2">
          <div class="row">
            <AppVimeo :id_video="varVideo.video_id" />
          </div>
        </div>

        <template #footer>
          <div class="d-flex justify-content-end">
            
            <vs-button @click="varVideo.formation = false" dark transparent>
              Annuler
            </vs-button>
          </div>
        </template>
      </vs-dialog>

      <!-- dialog ajouter bande annonce -->
      <vs-dialog width="1000px" not-center v-model="varVideo.annanceAdd">
        <template #header>
          <h4 class="not-margin">Bande <b> annonce </b></h4>
        </template>

        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <vs-input
                v-model="inpTitre"
                class="my-3"
                border
                primary
                icon-after
                label-placeholder="Titre"
              >
                <template #icon>
                  <i class="fa fa-tag"></i>
                </template>
              </vs-input>
            </div>
            <div class="col-lg-6 col-12">
              <vs-input
                v-model="inpDesc"
                class="my-3"
                border
                primary
                icon-after
                label-placeholder="Discrioption"
              >
                <template #icon>
                  <i class="fa fa-tag"></i>
                </template>
              </vs-input>
            </div>

            <div class="text-start mt-3" data-validate="Password is required">
              <span class="">Méthode d'ajoute</span>
              <div class="text-start mt-3">
                <vs-radio
                  class="justify-content-start mb-3"
                  v-model="method"
                  val="videoID"
                >
                  Ajoter video ID
                </vs-radio>
                <div class="col-lg-6 col-12 py-3" v-if="method == 'videoID'">
                  <vs-input
                    v-model="inpVideoID"
                    class="my-3"
                    border
                    primary
                    icon-after
                    label-placeholder="Video ID"
                  >
                    <template #icon>
                      <i class="fa fa-tag"></i>
                    </template>
                  </vs-input>
                </div>
                <vs-radio
                  class="justify-content-start mb-2"
                  v-model="method"
                  val="telecharge"
                >
                  Télécharger video
                </vs-radio>

                <!-- <video v-if="videopreview" width="320" height="240" controls>
                  <source :src="videopreview" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> -->

                <div class="col-12 py-4 row justify-content-end " v-if="method == 'telecharge'">
                  <div class="shadow col-5 p-3 ">

                  <p>Télécharger </p>
                  <input
                    type="file"
                    accept=""
                    ref="formation_img"
                    class="invisible"
                    id="img_formation"
                    @change="videoSelected"
                  />
                  <vs-button
                    class="col-lg-3 col-md-8 col-12"
                    circle
                    success
                    border
                    @click="$refs.formation_img.click()"
                  >
                    <i class="fa fa-upload"></i>
                  </vs-button>
                  </div>
                  <div class="col-7 row  justify-content-end align-content-end">

                  <vs-button
                    v-if="
                      videodata && inpDesc.length > 5 && inpTitre.length > 5
                    "
                    class="col-lg-3 col-md-8 col-12 ms-auto"
                    circle
                    primary
                    border
                    @click="
                      addAnnance(formation_id, videodata, inpTitre, inpDesc)
                    "
                  >
                    <i class="fa fa-save"></i>
                  </vs-button>
                  </div>
                </div>
              </div>
              <div class="row">
                <vs-button
                  v-if="inpVideoID && inpDesc.length > 5 && inpTitre.length > 5 && method == 'videoID'"
                  class="col-lg-3 col-md-8 col-12 ms-auto"
                  circle
                  primary
                  border
                  @click="addVideo(formation_id, videodata, inpTitre, inpDesc)"
                >
                  <i class="fa fa-save"></i>
                </vs-button>
              </div>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="d-flex justify-content-end">
            <vs-button @click="varVideo.annanceAdd = false" dark transparent>
              Annuler
            </vs-button>
          </div>
        </template>
      </vs-dialog>

      <!-- Dialog Ajouter formation video  -->
      <vs-dialog width="1000px" not-center v-model="formationAdd">
        <template #header>
          <h4 class="not-margin">Bande <b> annonce </b></h4>
        </template>

        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <vs-input
                v-model="inpTitre"
                class="my-3"
                border
                primary
                icon-after
                label-placeholder="Titre"
              >
                <template #icon>
                  <i class="fa fa-tag"></i>
                </template>
              </vs-input>
            </div>
            <div class="col-lg-6 col-12">
              <vs-input
                v-model="inpDesc"
                class="my-3"
                border
                primary
                icon-after
                label-placeholder="Discrioption"
              >
                <template #icon>
                  <i class="fa fa-tag"></i>
                </template>
              </vs-input>
            </div>

            <div class="text-start mt-3" data-validate="Password is required">
              <span class="">Méthode d'ajoute</span>
              <div class="text-start mt-3">
                <vs-radio
                  class="justify-content-start mb-3"
                  v-model="method"
                  val="videoID"
                >
                  Ajoter video ID
                </vs-radio>
                <div class="col-lg-6 col-12 py-3" v-if="method == 'videoID'">
                  <vs-input
                    v-model="inpVideoID"
                    class="my-3"
                    border
                    primary
                    icon-after
                    label-placeholder="Video ID"
                  >
                    <template #icon>
                      <i class="fa fa-tag"></i>
                    </template>
                  </vs-input>
                </div>
                <vs-radio
                  class="justify-content-start mb-2"
                  v-model="method"
                  val="telecharge"
                >
                  Télécharger video
                </vs-radio>

                <!-- <video v-if="videopreview" width="320" height="240" controls>
                  <source :src="videopreview" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> -->

                <div class="col-12 py-4 row justify-content-end " v-if="method == 'telecharge'">
                  <div class="shadow col-5 p-3 ">

                  <p>Télécharger </p>
                  <input
                    type="file"
                    accept=""
                    ref="formation_img"
                    class="invisible"
                    id="img_formation"
                    @change="videoSelected"
                  />
                  <vs-button
                    class="col-lg-3 col-md-8 col-12"
                    circle
                    success
                    border
                    @click="$refs.formation_img.click()"
                  >
                    <i class="fa fa-upload"></i>
                  </vs-button>
                  </div>
                  <div class="col-7 row  justify-content-end align-content-end">

                  <vs-button
                    v-if="
                      videodata && inpDesc.length > 5 && inpTitre.length > 5
                    "
                    class="col-lg-3 col-md-8 col-12 ms-auto"
                    circle
                    primary
                    border
                    @click="
                      addAnnance(formation_id, videodata, inpTitre, inpDesc)
                    "
                  >
                    <i class="fa fa-save"></i>
                  </vs-button>
                  </div>
                </div>
              </div>
              <div class="row">
                <vs-button
                  v-if="inpVideoID && inpDesc.length > 5 && inpTitre.length > 5 && method == 'videoID'"
                  class="col-lg-3 col-md-8 col-12 ms-auto"
                  circle
                  primary
                  border
                  @click="addVideo(formation_id, videodata, inpTitre, inpDesc)"
                >
                  <i class="fa fa-save"></i>
                </vs-button>
              </div>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="d-flex justify-content-end">
            <vs-button @click="formationAdd = false" transparent>
              Suivant
            </vs-button>
            <vs-button @click="formationAdd = false" dark transparent>
              Annuler
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
    <div v-else>
      <img src="../../assets/OrongeUL/Questions-cuate.png" width="600" alt="" />
      <h2>La formation n'existe pas</h2>
    </div>
  </div>
</template>

<script>
import AppVimeo from "@/components/vimeo/AppVimeo.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FormationShow",
  props: ["formation_id"],
  data: function () {
    return {
      video_id: undefined,
      annonceID:undefined,
      method: "videoID",
      id: this.formation_id,
      active: true,
      password: undefined,
      videodata: undefined,
      inpTitre: undefined,
      inpDesc: undefined,
      inpVideoID: undefined,
      videopreview: undefined,
      varVideo : {
        annance : false,
        annanceAdd: undefined,
        formation : false,
        formationAdd : undefined,
        video_id: undefined,
        annonceID:undefined,
      }
    };
  },
  components: {
    AppVimeo,
  },
  methods: {
    ...mapActions(["formationParam", "getAllFormationEn"]),
    videoFormation(id, pass) {
      this.varVideo.video_id = id;
      this.password = pass;
      this.formation = true;
    },
    videoAnnance(id) {
      this.annonceID = id;
      this.varVideo.annance = true;
    },
    async addAnnance(id, video, titre, descriptions) {
      let data = new FormData();
      data.append("formation_id", id);
      data.append("video", video);
      data.append("title", titre);
      data.append("description", descriptions);
      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/api/admin/add-annance",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "multipart/form-data",
          Connection: "keep-alive",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          let formation = response;
          // consoled for testing
          console.log(formation);
          // commit('setCategory', formation);
          // resolve('Success')
        })
        .catch((error) => {
          // reject(error)
          console.log(error);
        });
    },
    videoSelected(e) {
      this.videodata = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.videodata);
      reader.onload = (e) => {
        this.videopreview = e.target.result;
      };
    },
  },
  computed: {
    ...mapGetters(["formation"]),
  },
  created() {
    this.formationParam(this.id);
  },
};
</script>
