<template>
  <div class="py-5 bg-light">
    <h2 class="">Les Participants</h2>
    <hr />
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="'flush-headingOne'">
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
                      class="bg-white"
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
                            <img :src="tr.image" alt="" />
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
                        <vs-button border danger @click="ShowDeleteConf(tr)">
                          Supprimer Utilisateur
                        </vs-button>
                      </vs-td>
                      <vs-td>
                        <vs-button
                          v-if="tr.block == 1"
                          @click="ShowDisbockConf(tr)"
                          danger
                          flat
                          icon
                        >
                          <i class="bx bx-lock"></i>
                        </vs-button>

                        <vs-button
                          v-if="tr.block == 0"
                          @click="ShowBockConf(tr)"
                          flat
                          icon
                        >
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

    <vs-dialog square not-padding v-model="activeAlert">
      <vs-alert dark :progress="progress" v-model="activeAlert">
        <template #title> Succès </template>
        la personne a été supprimée avec succès
      </vs-alert>
    </vs-dialog>
    <!-- messgae confirmaton for remove persone -->
    <vs-dialog
      v-if="clientInfo"
      width="1000px"
     
      v-model="activeDelete"
    >
      <template #header>
        <h4 style="color: red" ><b> Confirmation </b></h4>
      </template>
      <div class="text-center">
        <h4 >Voulez-vous supprimer cette personne</h4>
      </div>

      <template #footer>
        <div class="d-flex justify-content-end">
          <vs-button
            @click="
              deleteClient(
                clientInfo.id,
                clientInfo.nom,
                clientInfo.prenom,
                clientInfo.email
              )
            "
            transparent
          >
            Oui
          </vs-button>
          <vs-button @click="activeDelete = false" dark transparent>
            Non
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <!-- messgae confirmaton for block persone -->

    <vs-dialog
      v-if="clientInfo"
      width="1000px"
      
      v-model="activeBlock"
    >
      <template #header>
        <h4 style="color: red"><b> Confirmation </b></h4>
      </template>
      <div class="text-center">
        <!-- <h4>Voulez-vous supprimer cette personne</h4> -->
        <h4 >{{ messageConfirmation }}</h4>
      </div>

      <template #footer>
        <div class="d-flex justify-content-end">
          <vs-button @click="blockClient(clientInfo.id)" transparent>
            Oui
          </vs-button>
          <vs-button @click="activeBlock = false" dark transparent>
            Non
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <!-- messgae confirmaton for diblock persone -->

    <vs-dialog v-if="clientInfo" width="1000px" v-model="activeDisblock">
      <template #header>
        <h4 class="not-margin"><b> Confirmation </b></h4>
      </template>
      <div class="text-center">
        <h4>{{ messageConfirmation }}</h4>
      </div>

      <template #footer>
        <div class="d-flex justify-content-end">
          <vs-button @click="disblockClient(clientInfo.id)" transparent>
            Oui
          </vs-button>
          <vs-button @click="activeDisblock = false" dark transparent>
            Non
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <!-- Dialog for sanding message -->
    <vs-dialog v-if="clientInfo" width="1000px" v-model="activeEmail">
      <template #header>
        <h4 class="not-margin">Envoyer un <b> e-mail </b></h4>
      </template>

      <div class="container">
        <div class="row text-start">
          <div class="center col-12">
            <vs-alert primary :progress="progress" v-model="activeMail">
              <template #title> Succès </template>
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

          <div class="col-lg-12 col-md-12 col-sm-12 justify-content-center">
            <div class="contact-inp p-3">
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
                  <div class="invalid-feedback">Please enter title.</div>
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
                  <div class="invalid-feedback">Please enter subject.</div>
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
                <div class="text-center col-3 offset-lg-10">
                  <vs-button
                    v-if="inpttitre && inptsubject && inptmessage && clientInfo"
                    border
                    @click="
                      addMessage(
                        clientInfo.id,
                        inpttitre,
                        inptsubject,
                        inptmessage
                      )
                    "
                    class="btn btn-lg btn-send"
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
        <div class="d-flex justify-content-end">
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
      activeDelete: false,
      activeAlert: false,
      activeMail: false,

      activeBlock: false,
      activeDisblock: false,

      time: 2500,
      progress: 0,

      inptnom: undefined,
      inptprenom: undefined,
      inptemail: undefined,
      inpttitre: undefined,
      inptsubject: undefined,
      inptmessage: undefined,
      formobj: undefined,

      messageConfirmation: undefined,
    };
  },
  methods: {
    ...mapActions([
      "getAllClient",
      "adminSendMessage",
      "disblockPersonne",
      "blockPersonne",
    ]),
    ShowSendMessage(client) {
      this.clientInfo = client;
      this.activeEmail = true;
    },
    ShowDeleteConf(client) {
      this.clientInfo = client;
      this.messageConfirmation = "Voulez-vous supprimer cette personne";
      this.activeDelete = true;
    },

    ShowBockConf(client) {
      this.clientInfo = client;
      this.messageConfirmation = "Voulez-vous bloquer cette personne ?";
      this.activeBlock = true;
    },
    ShowDisbockConf(client) {
      this.clientInfo = client;
      this.messageConfirmation = "Voulez-vous débloquer cette personne ?";
      this.activeDisblock = true;
    },
    async addMessage(id, title, subject, message) {
      if (id && title && subject && message) {
        this.$store
          .dispatch("adminSendMessage", [id, title, subject, message])
          .then((res) => {
            console.log(res);
            this.activeMail = true;

            this.inptnom = undefined;
            this.inptprenom = undefined;
            this.inptemail = undefined;
            this.inpttitre = undefined;
            this.inptsubject = undefined;
            this.inptmessage = undefined;
          });
      }
    },
    async blockClient(id) {
      this.$store
        .dispatch("blockPersonne", [id])
        .then((result) => {
          console.log(result);
          this.activeBlock = false;
          this.clientInfo = this.messageConfirmation = undefined;

          // this.activeConfirmation = false;
          // this.idFormation = undefined;
        })
        .catch((err) => {
          this.errorDesc = err.message;
          this.alertDanger = true;
        });
    },
    async disblockClient(id) {
      this.$store
        .dispatch("disblockPersonne", [id])
        .then((result) => {
          console.log(result);
          // this.activeConfirmation = false;
          // this.idFormation = undefined;

          // this.activeConfirmation = false;
          // this.activeDelete = false;
          // this.activeAlert = true;
        })
        .catch((err) => {
          this.errorDesc = err.message;
          this.alertDanger = true;
        });
    },
    async deleteClient(id, nom, prenom, email) {
      this.$store
        .dispatch("deletePersonne", [id, nom, prenom, email])
        .then((result) => {
          console.log(result);
          // this.activeConfirmation = false;
          // this.idFormation = undefined;

          // this.activeConfirmation = false;
          this.activeDelete = false;
          this.activeAlert = true;
        })
        .catch((err) => {
          this.errorDesc = err.message;
          this.alertDanger = true;
        });
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
