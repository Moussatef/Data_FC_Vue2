<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class=" py-5 bg-light">
      
      <div class="container">
        <div class="row ">
          <div class="col-12 row g-3 justify-content-between my-3 ">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12   py-2 ">
              <div class="info-item">
                <span>
                  <img
                    src="../assets/pin.png"
                    class="mb-2"
                    width="35"
                    height="35"
                    alt=""
                  />
                </span>
                <h3>Adresse</h3>
                <p>
                  {{company.adresse}}
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 col-12  py-2 ">
              <div class="info-item">
                <span>
                  <img
                    src="../assets/gmail.png"
                    class="mb-2"
                    width="35"
                    height="35"
                    alt=""
                  />
                </span>
                <h3>E-mail</h3>
                <p>{{company.email}}</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 col-12  py-2 ">
              <div class="info-item">
                <span>
                  <img
                    src="../assets/telephone.png"
                    class="mb-2"
                    width="35"
                    height="35"
                    alt=""
                  />
                </span>
                <h3>Telephone</h3>
                <p><b>Tele :</b>{{company.tele}}</p>
                <p><b>Fixe :</b> {{company.fixe}}</p>
              </div>
            </div>
          </div>
          <div class="center col-12">
            <vs-alert
              primary
              :progress="progress"
              v-if="formobj"
              v-model="active"
            >
              <template #title>
                Succès
              </template>
              <p>
                {{ formobj.nom }} {{ formobj.prenom }} <br />
                Votre e-mail : {{ formobj.email }} <br />
              </p>
              message envoyé avec succès
            </vs-alert>
          </div>
          <div class="row col-12">
            <div class="col-lg-6 col-md-12 col-sm-12  justify-content-center ">
              <div class="contact-inp p-3 ">
                <div class="row g-3">
                  <div class="col-sm-6">
                    <input
                      v-model="inptnom"
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="Prenom"
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <input
                      v-model="inptprenom"
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Nom"
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  <div class="col-12">
                    <input
                      v-model="inptemail"
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
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
                  <div class="text-center ">
                    <button
                      type="submit"
                      @click="
                        addMessage(
                          inptnom,
                          inptprenom,
                          inptemail,
                          inptsubject,
                          inptmessage
                        )
                      "
                      class="btn btn-lg btn-send"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12  ">
              <div style="width: 100%">
                <iframe
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=530&amp;hl=en&amp;q=32.29406181949974,-9.23353672027588+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="530"
                  frameborder="0"
                ></iframe>
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Contact",
  data: function() {
    return {
      titre: "CONTACT NOUS",
      inptnom: undefined,
      inptprenom: undefined,
      inptemail: undefined,
      inptsubject: undefined,
      inptmessage: undefined,
      formobj: undefined,

      active: false,
      time: 4000,
      progress: 0,
    };
  },
  methods: {
    ...mapActions(["sendMessage","getCompnyInfo"]),
    addMessage(nom, prenom, email, subject, message) {
      if (nom && prenom && email && subject && message) {
        this.$store
          .dispatch("sendMessage", [nom, prenom, email, subject, message])
          .then((res) => {
            console.log(res);
            this.active = true;

            this.formobj = {
              nom: nom,
              prenom: prenom,
              email: email,
            };

            this.inptnom = undefined;
            this.inptprenom = undefined;
            this.inptemail = undefined;
            this.inptsubject = undefined;
            this.inptmessage = undefined;
          });
      }
    },
  },
  computed:{
    ...mapGetters(["company"]),
  },
  watch: {
    active(val) {
      if (val) {
        var interval = setInterval(() => {
          this.progress++;
        }, this.time / 100);

        setTimeout(() => {
          this.active = false;
          clearInterval(interval);
          this.progress = 0;
        }, this.time);
      }
    },
  },

  components: {
    AppSection,
  },
};
</script>
<style lang="scss" scoped>

.card {
  border: solid 1px #238a91;
}
.contact-inp {
  background: #fff;
  text-align: center;
}
.info-item {
  background: #fff;
  padding: 20px 0 30px 0;
  color: #444444;
  text-align: center;
  box-shadow: 0 0 30px #9e9e9e54;
  text-justify: center;
  min-height: 200px;
  h3 {
    font-size: 20px;
    color: #777777;
    font-weight: 700;
    margin: 10px 0;
  }
  p {
    padding: 0;
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
.btn-send {
  background: #009f93;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
}
</style>
