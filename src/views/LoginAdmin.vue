<template>
  <div class="overflow-hidden">
    <div class="limiter">
      <div
        class="container-login100 bg-light"
        style="background-image url('images/bg-01.jpg');"
      >
        <div class="wrap-login100 p-l-55 p-r-55 p-t-20 p-b-20 shadow">
          <img src="../assets/logo.jpg" class="logo" alt="" />
          <hr />
          <span class="login100-form-title p-b-50 m-b-50 mt-3">
            Connexion Administrateur
          </span>

          <vs-alert
            dark
            :progress="progress"
            color="danger"
            closable
            v-model="active"
            v-if="message_err"
          >
            <template #title> Erreur lors de l'inscription </template>
            {{ message_err }}
          </vs-alert>

          <div
            class="m-b-23 my-3 text-start"
            data-validate="Username is reauired"
          >
            <span class="mb-4">E-mail</span>
            <!-- <input
                class="input100"
                type="email"
                name="Email"
                placeholder="Écrivez votre e-mail"
              />
              <span class="focus-input100" ></span> -->
            <vs-input
              color="#25767a"
              class="my-4"
              border
              type="email"
              v-model="email"
              placeholder="Écrivez votre e-mail"
            >
              <template #icon>
                <i class="bx bx-user"></i>
              </template>
            </vs-input>
          </div>
          <div
            class="wrap-input100 text-start"
            data-validate="Password is required"
          >
            <span class="my-2">Mot de passe</span>
            <!-- <input
                class="input100"
                type="password"
                name="pass"
                placeholder="Écrivez votre mot de passe"
              />
              <span class="focus-input100"></span> -->
            <vs-input
              color="#25767a"
              border
              class="my-4 inp"
              type="password"
              v-model="password"
              placeholder="Écrivez votre mot de passe"
            >
              <template #icon>
                <i class="bx bx-lock-open-alt"></i>
              </template>
            </vs-input>
          </div>

          <div class="text-right p-t-8 p-b-31">
            <a class="nav-link" href="#"> Mot de passe oublié? </a>
          </div>
          <div class="">
            <div class="d-grid gap-2">
              <!-- <button class="si" type="button">
                  Se connecter
                </button> -->
              <vs-button
                color="rgba(35, 138, 145, 1) "
                class="sii"
                gradient
                :active="active == 6"
                @click="
                  active = 6;
                  Auth(email, password);
                "
              >
                Se connecter
              </vs-button>

              <vs-button
                border
                class="fbb"
                color="#25767a"
                :active="active == 1"
                @click="active = 1"
                to="/register"
              >
                S'inscrire
              </vs-button>
            </div>
          </div>
          <!-- 
					<div class="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Sign Up Using
						</span>
					</div> -->
          <!-- 
					<div class="flex-c-m">
						<a href="#" class="login100-social-item bg1">
							<i class="fa fa-facebook"></i>
						</a>

						<a href="#" class="login100-social-item bg2">
							<i class="fa fa-twitter"></i>
						</a>

						<a href="#" class="login100-social-item bg3">
							<i class="fa fa-google"></i>
						</a>
					</div> -->
          <div class="flex-col-c p-t-55"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LoginAdmin",
  data: () => ({
    email: undefined,
    password: undefined,
    active: 0,
    message_err: "",
    active_alert: false,

    active_alert: false,
    input1: "",
    input2: "",
    checkbox1: false,

    time: 6000,
    progress: 0,
  }),
  methods: {
    ...mapActions(["auth"]),
    async Auth(email, password) {
      if (email && password) {
        this.$store
          .dispatch("auth", [email, password])
          .then((res) => {
            console.log(res);
            this.message_err = undefined;
            localStorage.setItem("accessToken", res.Token);
            location.replace("/admin-dashboard");
          })
          .catch((error) => {
            console.log(error.message);
            this.message_err = error.message;
          });
      } else {
        this.message_err = "entrées vides";
      }
    },
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
  computed: {
    getProgress() {
      let progress = 0;

      // at least one number

      if (/\d/.test(this.value)) {
        progress += 20;
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.value)) {
        progress += 20;
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.value)) {
        progress += 20;
      }

      // more than 5 digits

      if (this.value.length >= 6) {
        progress += 20;
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.value)) {
        progress += 20;
      }

      return progress;
    },
  },
};
</script>

<style lang="scss" scoped>
/*[ FONT SIZE ]
///////////////////////////////////////////////////////////
*/

.alert-example {
  .vs-button--active {
    transform: translate(0, -5px);
    border-radius: 0px 0px 12px 12px;
  }
}

.m-b-23 {
  margin-bottom: 23px;
}
.p-b-31 {
  padding-bottom: 31px;
}
.p-t-8 {
  padding-top: 8px;
}
.p-t-155 {
  padding-top: 155px;
}
.p-b-20 {
  padding-bottom: 20px;
}
.p-t-20 {
  padding-top: 20px;
}
.p-l-55 {
  padding-left: 55px;
}
.p-b-50 {
  padding-bottom: 20px;
}
.m-b-50 {
  margin-bottom: 40px;
}
.p-r-55 {
  padding-right: 55px;
}
.p-t-55 {
  padding-top: 55px;
}
.pos-relative {
  position: relative;
}
.pos-absolute {
  position: absolute;
}
.pos-fixed {
  position: fixed;
}

.logo {
  width: 400px;
  // height: 150px;
}

.nav-link:hover {
  text-decoration: underline;
  transform: scale(1.07);
  transition: 0.5s;
}

.btn-conx {
  background: #2e7c7c;
  color: #fff;
  transition: 1s;
}

.btn-conx:hover {
  background: #ffffff;
  color: rgb(80, 80, 80);
  border: 1px solid #2e7c7c;
  transition: 1s;
}
/*---------------------------------------------*/
a {
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
  color: #288d85;
}

/*---------------------------------------------*/
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
}

ul,
li {
  margin: 0px;
  list-style-type: none;
}

/*---------------------------------------------*/

iframe {
  border: none !important;
}

/*//////////////////////////////////////////////////////////////////
[ Utility ]*/
.txt1 {
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.5;
  color: #666666;
}

.txt2 {
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  text-transform: uppercase;
}

.bg1 {
  background-color: #3b5998;
}
.bg2 {
  background-color: #1da1f2;
}
.bg3 {
  background-color: #ea4335;
}

/*//////////////////////////////////////////////////////////////////
[ login ]*/
.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.wrap-login100 {
  width: 600px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}

/*------------------------------------------------------------------
[ Form ]*/

.login100-form {
  width: 100%;
}

.login100-form-title {
  display: block;
  font-family: Poppins;
  font-size: 39px;
  color: #868686;
  line-height: 2.2;
  text-align: center;
}

/*------------------------------------------------------------------
[ Input ]*/

.wrap-input100 {
  width: 100%;
  position: relative;

  // border-bottom: 2px solid #d9d9d9;
}

.label-input100 {
  font-family: Poppins;
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
  padding-left: 7px;
}

.input100 {
  font-family: Poppins;
  font-size: 16px;
  color: #333333;
  line-height: 1.2;

  display: block;
  width: 100%;
  height: 55px;
  background: transparent;
  padding: 0 7px 0 43px;
}

/*---------------------------------------------*/
.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-input100::after {
  content: attr(data-symbol);
  font-family: Material-Design-Iconic-Font;
  color: #adadad;
  font-size: 22px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: calc(100% - 20px);
  bottom: 0;
  left: 0;
  padding-left: 13px;
  padding-top: 3px;
}

.focus-input100::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2e7c7c;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100:focus + .focus-input100::before {
  width: 100%;
}

.has-val.input100 + .focus-input100::before {
  width: 100%;
}

.input100:focus + .focus-input100::after {
  color: #2e7c7c;
}

.has-val.input100 + .focus-input100::after {
  color: #2e7c7c;
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.validate-input {
  position: relative;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  max-width: 70%;
  background-color: #fff;
  border: 1px solid #c80000;
  border-radius: 2px;
  padding: 4px 25px 4px 10px;
  bottom: calc((100% - 20px) / 2);
  -webkit-transform: translateY(50%);
  -moz-transform: translateY(50%);
  -ms-transform: translateY(50%);
  -o-transform: translateY(50%);
  transform: translateY(50%);
  right: 2px;
  pointer-events: none;

  font-family: Poppins-Regular;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

.alert-validate::after {
  content: "\f06a";
  font-family: FontAwesome;
  display: block;
  position: absolute;
  color: #c80000;
  font-size: 16px;
  bottom: calc((100% - 20px) / 2);
  -webkit-transform: translateY(50%);
  -moz-transform: translateY(50%);
  -ms-transform: translateY(50%);
  -o-transform: translateY(50%);
  transform: translateY(50%);
  right: 8px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

.sii,
.fbb {
  padding: 2px;
}
#fbi {
}

.fb,
.si {
  width: 100%;
  padding: 4px;
  border-radius: 15px;
  font-size: 18px;
  margin: 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
  text-decoration: none;
}

.si {
  padding: 9px;
  background-color: rgb(255, 255, 255);
  color: rgb(53, 53, 53);
  border: solid 2px rgba(35, 138, 145, 1);
}

.si:hover {
  background-color: rgba(35, 138, 145, 1);
  color: #fff;
  transform: translateY(-3px);
  transition: 0.5s;
}

.fb {
  background-color: #fff;
  border: solid 2px rgba(35, 138, 145, 1);
  color: rgb(53, 53, 53);
  transition: 0.5s;
}

.fb:hover {
  background-color: rgba(35, 138, 145, 1);
  color: #fff;
  transition: 0.5s;
  border: solid 2px rgb(39, 113, 122);
  transform: translateY(-3px);
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}

/*//////////////////////////////////////////////////////////////////
[ Social item ]*/
.login100-social-item {
  font-size: 25px;
  color: #fff;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
}

.login100-social-item:hover {
  color: #fff;
  background-color: #333333;
}

/*//////////////////////////////////////////////////////////////////
[ Responsive ]*/

@media (max-width: 576px) {
  .wrap-login100 {
    padding-left: 15px;
    padding-right: 15px;
  }
  .logo {
    width: 200px;
    // height: 150px;
  }
}

@media (max-width: 576px) {
}
</style>
