<template>
  <div class="overflow-hidden">
    <div class="container my-4">
      <div class="row justify-content-between  bg-white py-3">
        <div class="col-lg-8">
          <h2>Ajouter Formation</h2>
        </div>
        <div class="col-lg-2">
          <vs-button
            size="large"
            :active="activebtn == 1"
            @click="
              activebtn = 1;
              openM();
            "
          >
            Ajouter
          </vs-button>
        </div>
      </div>

      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="row justify-content-between">
            <div class="col-10"></div>

            <vs-button
              class="close float-right col-2"
              circle
              danger
              border
              :active="activeClos == 6"
              @click="
                activeClos = 6;
                closeM();
              "
            >
              <i class="fa fa-close"></i>
            </vs-button>
          </div>
          <div class="con-form">
            <div class="row justify-content-center align-items-center">
              <div class="col-3 ">
                <img
                  v-if="img_src == false"
                  src="../../assets/OrongeUL/Attheofficerafiki.png"
                  width="200"
                  height="200"
                  class="rounded-lg"
                  alt=""
                  id="src_formation"
                />
                <img
                  v-if="img_src == true"
                  :src="imagepreview"
                  width="200"
                  height="200"
                  class="rounded-lg"
                  alt=""
                  id="src_formation"
                />
                <input
                  type="file"
                  accept="image/*"
                  ref="formation_img"
                  class=" invisible "
                  id="img_formation"
                  @change="imageSelected"
                />
                <vs-button
                  class="col-lg-12 col-md-12 col-12 "
                  circle
                  success
                  border
                  :active="activeClos == 6"
                  @click="
                    activeClos = 6;
                    $refs.formation_img.click();
                  "
                >
                  <i class="fa fa-upload"></i>
                </vs-button>
              </div>
              <div class="col-lg-10 col-12 row   align-items-center my-3">
                <div class="col-lg-4">Type de formation</div>
                <div class="col-lg-8">
                  <vs-select v-model="value1">
                    <vs-option
                      v-for="cat in categories"
                      :key="cat.id"
                      :label="cat.codeF + ' : ' + cat.titre"
                      :value="cat.id"
                    >
                      {{ cat.codeF }} : {{ cat.titre }}
                    </vs-option>
                  </vs-select>
                </div>
              </div>
              <div class="col-lg-2 col-12">
                <vs-button
                  size="large"
                  :active="activebtn == 1"
                  @click="activebtn = 1"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </vs-button>
              </div>
              <div class="col-lg-6 col-12">
                <vs-input
                  v-model="inpCodeF"
                  class="my-3"
                  border
                  warn
                  icon-after
                  label-placeholder="Code formation"
                >
                  <template #icon>
                    <i class="fa fa-tag"></i>
                  </template>
                </vs-input>
              </div>
              <div class="col-lg-6 col-12">
                <vs-input
                  v-model="inpTitre"
                  class="my-3"
                  border
                  warn
                  icon-after
                  label-placeholder="Titre"
                >
                  <template #icon>
                    <i class="fa fa-sticky-note-o"></i>
                  </template>
                </vs-input>
              </div>
              <!-- //row 2 -->
              <div class="col-lg-6 col-12">
                <!-- <vs-input
                v-model="input1"
                class="my-3"
                border
                warn
                icon-after
                label-placeholder="Objectifs"
              >
                <template #icon>
                  <i class="fa fa-tag"></i>
                </template>
              </vs-input> -->
                <textarea
                  v-model="inpObj"
                  class="form-control mb-2"
                  placeholder="objectifs"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-lg-6 col-12">
                <vs-input
                  v-model="inpPc"
                  class="my-3"
                  border
                  warn
                  icon-after
                  label-placeholder="Population cible"
                >
                  <template #icon>
                    <i class="fa fa-tasks"></i>
                  </template>
                </vs-input>
              </div>
              <!-- //row 3 -->
              <div class="col-lg-12 col-12">
                <vs-input
                  v-model="inpDf"
                  class="my-3"
                  border
                  warn
                  icon-after
                  label-placeholder="Durée de la formation"
                >
                  <template #icon>
                    <i class="fa fa-clock-o"></i>
                  </template>
                </vs-input>
              </div>
              <div
                class="col-lg-12 col-12 row  justify-content-between align-items-center"
              >
                <div class="col-10">
                  <vs-input
                    v-model="inpProgramme"
                    class="my-3"
                    border
                    warn
                    icon-after
                    label-placeholder="Programme de formation"
                  >
                    <template #icon>
                      <i class="fa fa-puzzle-piece"></i>
                    </template>
                  </vs-input>
                </div>
                <div class="col-1">
                  <vs-button size="large" @click="putProgramme(inpProgramme)">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </vs-button>
                </div>
              </div>
              <div
                class="col-lg-12 d-flex flex-wrap justify-content-center align-items-center"
              >
                <div v-for="(pro, i) in programme" :key="i" class="p-4 m-1">
                  <!-- <vs-alert gradient>
                  <template #title>
                    Vuesax Framework
                  </template>
                </vs-alert> -->
                  <span
                    class="badge badge_prm rounded-pill text-dark ps-3 py-1 d-flex justify-content-between align-items-center fs-6"
                  >
                    <i class="fa fa-check mt-1 mx-2"></i>

                    {{ pro }}
                    <vs-button size="small" class="ms-5" @click="removeEl(pro)">
                      <i class="fa fa-close"></i> </vs-button
                  ></span>
                </div>
              </div>
              <div
                class="row col-4 offset-md-8"
                v-if="
                  inpCodeF &&
                    inpTitre &&
                    inpObj &&
                    inpPc &&
                    inpDf &&
                    programme.length &&
                    value1
                "
              >
                <vs-button
                  size="large"
                  class="my-4"
                  @click="
                    addFormation([
                      inpCodeF,
                      inpTitre,
                      inpObj,
                      inpPc,
                      inpDf,
                      programme,
                      image,
                      value1,
                    ])
                  "
                >
                  <i class="fa fa-plus" aria-hidden="true"> Ajouter</i>
                </vs-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  data: () => ({
    activebtn: 0,
    activeDlg: false,
    value1: "",
    programme: [],
    inpProgramme: undefined,
    inpCodeF: undefined,
    inpTitre: undefined,
    inpDf: undefined,
    inpPc: undefined,
    inpObj: undefined,

    activeClos: 0,
    imagepreview: "../../assets/OrongeUL/Attheofficerafiki.png",
    image: null,
    img_src: false,
    token: localStorage.getItem("token"),
  }),

  methods: {
    ...mapActions(["getAllFormationEn", "getAllCategories"]),
    async addFormation(param) {
      const data = new FormData();
      data.append("codeFormation", param[0]);
      data.append("titre", param[1]);
      data.append("objectifs", param[2]);
      data.append("populationCible", param[3]);
      data.append("dureeFormation", param[4]);
      data.append("programmeFormation", param[5]);
      data.append("imgFormation", param[6]);
      data.append("typeFormation", param[7]);

      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + this.token);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: data,
        redirect: "follow",
      };

      const res = await axios.post(
        "http://127.0.0.1:8000/api/add/formation",
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ` + this.token,
          },
        }
      );
      if (res.status === 200) {
        const result = await res.json();
        console.log(result);
      }
    },
    imageSelected(e) {
      this.img_src = true;
      this.image = e.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(this.image);
      reader.onload = (e) => {
        this.imagepreview = e.target.result;
      };
    },
    putProgramme(item) {
      if (item) {
        this.programme.push(item);
        this.inpProgramme = undefined;
      }
    },
    removeEl(element) {
      this.programme = this.programme.filter((e) => e !== element);
      //   e.preventDefault();
    },

    openM() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    closeM() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    exitModal() {
      var modal = document.getElementById("myModal");
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  },
  create() {
    this.exitModal();
  },
  computed: mapGetters(["formationEnt", "categories"]),
  mounted() {
    this.getAllFormationEn();
    this.getAllCategories();
  },
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow-y: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 8% auto 3%; /* 15% from the top and centered */
  padding: 10px 40px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 18px;
  font-weight: bold;
  width: 40px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.badge_prm {
  background: linear-gradient(130deg, #0fc6eb85 0%, #09a81e38 100%);
  color: #fff;
}
</style>
