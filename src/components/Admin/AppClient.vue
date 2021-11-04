<template>
  <div class=" py-5 bg-light">
    <h2 class="">Les Participants</h2>
    <hr />
    <div class="accordion accordion-flush " id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header " id="'flush-headingOne'">
          <button
            class="accordion-button collapsed fs-4"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapseOne'"
            aria-expanded="false"
            :aria-controls="'flush-collapseOne'"
          >
            Les Participants
          </button>
        </h2>
        <div
          :id="'flush-collapseOne'"
          class="accordion-collapse collapse show"
          :aria-labelledby="'flush-headingOne'"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="center my-4">
                <vs-table striped>
                  <template #header>
                    <vs-input v-model="search" border placeholder="Search" />
                  </template>
                  <template #thead>
                    <vs-tr>
                      <vs-th class="fs-6"> Nom </vs-th>
                      <vs-th class="fs-6"> Prenom </vs-th>
                      <vs-th class="fs-6"> Email </vs-th>
                      <vs-th class="fs-6"> Telephone </vs-th>
                      <vs-th class="fs-6"> Genre </vs-th>
                      <vs-th class="fs-6"> Role </vs-th>
                      <vs-th class="px-5 mx-5"> </vs-th>
                      <vs-th class="px-5 mx-5"> </vs-th>
                      <vs-th class="px-5 mx-5"> </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      class="bg-white "
                      :key="i"
                      v-for="(tr, i) in $vs.getSearch(client, search)"
                      :data="tr"
                      :danger="tr.id == 3"
                      :success="tr.id == 5"
                      :primary="tr.id == 8"
                      :warn="tr.id == 9"
                    >
                      <vs-td class="text-start fs-6">
                        <div class="d-flex align-items-center">
                          <vs-avatar class="me-4">
                            <img
                              :src="'http://127.0.0.1:8000' + tr.image"
                              alt=""
                            />
                          </vs-avatar>
                          {{ tr.nom }}
                        </div>
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.prenom }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.email }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.telephone }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.genre }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.role }}
                      </vs-td>
                      <vs-td>
                        <vs-button @click="ShowSendMessage(tr)" flat icon>
                          Envoyer un e-mail
                        </vs-button>
                      </vs-td>
                      <vs-td>
                        <vs-button border danger>
                          Supprimer Utilisateur
                        </vs-button>
                      </vs-td>
                      <vs-td>
                        <vs-button v-if="tr.block == 1" danger flat icon>
                         <i class="bx bx-lock"></i>
                        </vs-button>

                        <vs-button v-if="tr.block == 0"  flat icon>
                          <i class="bx bx-lock-open-alt"></i>
                        </vs-button>
                      </vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vs-dialog v-if="clientInfo" width="1000px" v-model="activeEmail">
      <template #header>
        <h4 class="not-margin">Envoyer un <b> e-mail </b></h4>
      </template>

      <div class="container">
        <div class="row text-start">
          <div class="center col-12">
            <vs-alert
              primary
              :progress="progress"
              
              v-model="activeAlert"
            >
              <template #title>
                Succès
              </template>
              <p>
                {{ clientInfo.nom }} {{ clientInfo.prenom }} <br />
                Votre e-mail : {{ clientInfo.email }} <br />
              </p>
              message envoyé avec succès
            </vs-alert>
          </div>
          <div class="col-8 row">
            <div class="col-2">
              <h5>à :</h5>
            </div>
            <div class="col-6">
              <h6>{{ clientInfo.nom }} {{ clientInfo.prenom }}</h6>
            </div>
          </div>
          <div class="col-8 row">
            <div class="col-2">
              <h5>e-mail:</h5>
            </div>
            <div class="col-6">
              <h6>{{ clientInfo.email }}</h6>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12  justify-content-center ">
            <div class="contact-inp p-3 ">
              <div class="row g-3">
                <div class="col-12">
                  <input
                    v-model="inpttitre"
                    type="text"
                    class="form-control"
                    id="titre"
                    placeholder="titre"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your Telephone.
                  </div>
                </div>
                <div class="col-12">
                  <input
                    v-model="inptsubject"
                    type="text"
                    class="form-control"
                    id="Subject"
                    placeholder="Subject"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your Telephone.
                  </div>
                </div>

                <div class="col-12">
                  <textarea
                    v-model="inptmessage"
                    class="form-control"
                    id="msg"
                    value=""
                    placeholder="Votre Message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div class="text-center col-3 offset-lg-10  ">
                  <vs-button
                    border
                    @click="
                      addMessage(
                        clientInfo.id,
                        inpttitre,
                        inptsubject,
                        inptmessage
                      )
                    "
                    class="btn btn-lg btn-send "
                  >
                    Send Message
                  </vs-button>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="d-flex  justify-content-end">
          <vs-button @click="activeEmail = false" transparent>
            Ok
          </vs-button>
          <vs-button @click="activeEmail = false" dark transparent>
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppFormation",
  props: ["check"],
  data: () => {
    return {
      clientInfo: undefined,
      search: "",
      // page: 1,
      // max: 10,
      selected: [],
      activeEmail: false,
      activeAlert: false,
      time: 4000,
      progress: 0,

      inptnom: undefined,
      inptprenom: undefined,
      inptemail: undefined,
      inpttitre: undefined,
      inptsubject: undefined,
      inptmessage: undefined,
      formobj: undefined,
    };
  },
  methods: {
    ...mapActions(["getAllClient", "adminSendMessage"]),
    ShowSendMessage(client) {
      this.clientInfo = client;
      this.activeEmail = true;
    },
    addMessage(id, title, subject, message) {
      if (id && title && subject && message) {
        this.$store
          .dispatch("adminSendMessage", [id, title, subject, message])
          .then((res) => {
            console.log(res);
            this.activeAlert = true;

            // this.formobj = {
            //   nom: nom,
            //   prenom: prenom,
            //   email: email,
            // };

            this.inptnom = undefined;
            this.inptprenom = undefined;
            this.inptemail = undefined;
            this.inpttitre = undefined;
            this.inptsubject = undefined;
            this.inptmessage = undefined;
          });
      }
    },
  },
  watch: {
    activeAlert(val) {
      if (val) {
        var interval = setInterval(() => {
          this.progress++;
        }, this.time / 100);

        setTimeout(() => {
          this.activeAlert = false;
          this.activeEmail = false;
          clearInterval(interval);
          this.progress = 0;
        }, this.time);
      }
    },
  },

  computed: mapGetters(["client"]),

  mounted() {
    this.getAllClient();
  },
};
</script>
