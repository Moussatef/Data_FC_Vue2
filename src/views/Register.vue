<template>
  <div class=" overflow-hidden">
    <vs-dialog width="550px" not-close blur v-model="active_dlg">
      <template #header>
        <h4 class="not-margin">Message <b>succès</b></h4>
      </template>

      <div class="con-content">
        <p>
          Enregistré avec succès maintenant vous pouvez vous connecter pour
          continuer
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button to="/login" @click="active_dlg = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <div class="limiter ">
      <div
        class="container-login100 bg-light"
        style="background-image url('images/bg-01.jpg');"
      >
        <div class="wrap-login100 mt-5 p-l-55 p-r-55 p-t-20 p-b-20">
          <img src="../assets/logo.jpg" class="logo" alt="" />
          <span class="login100-form-title p-b-50">
            S'inscrire
          </span>

          <div
            class="wrap-input100 validate-input m-b-23 text-start"
            data-validate="Username is reauired"
          >
            <span class=" my-2">Nom</span>
            <vs-input
              color="#25767a"
              name="first-name"
              class="my-4 "
              border
              type="text"
              v-model="nom"
              placeholder="Écrivez votre nom"
            >
              <template #icon>
                <i class="bx bx-user"></i>
              </template>
            </vs-input>
          </div>

          <div
            class="wrap-input100 validate-input m-b-23 text-start"
            data-validate="Username is reauired"
          >
            <span class=" my-2">Prénom</span>
            <vs-input
              color="#25767a"
              class="my-4 "
              border
              type="text"
              name="last-name"
              v-model="prenom"
              placeholder="Écrivez votre prenom"
            >
              <template #icon>
                <i class="bx bx-user"></i>
              </template>
            </vs-input>
          </div>

          <div
            class="wrap-input100 validate-input m-b-23 text-start"
            data-validate="Username is reauired"
          >
            <span class=" my-2">Email</span>
            <vs-input
              color="#25767a"
              class="my-4 "
              border
              type="email"
              v-model="email"
              placeholder="Écrivez votre e-mail"
            >
              <template #icon>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </template>
            </vs-input>
          </div>

          <div
            class="wrap-input100 validate-input text-start"
            data-validate="Password is required"
          >
            <span class=" ">Mot de passe</span>
            <vs-input
              color="#25767a"
              border
              class="my-4"
              type="password"
              v-model="password"
              placeholder="Écrivez votre mot de passe"
            >
              <template #icon>
                <i class="bx bx-lock-open-alt"></i>
              </template>
            </vs-input>
          </div>

          <div
            class="wrap-input100 validate-input text-start mt-3"
            data-validate="Password is required"
          >
            <span class=" ">Confirmez le mot de passe</span>
            <vs-input
              color="#25767a"
              border
              class="my-4"
              type="password"
              v-model="password_confirmation"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="réécrire le mot de passe"
            >
              <template #icon>
                <i class="bx bx-lock-open-alt"></i>
              </template>
            </vs-input>
          </div>
          <div
            class="wrap-input100 validate-input text-start mt-3"
            data-validate="Password is required"
          >
            <span class=" ">Genre</span>
            <div class="text-start mt-3  ">
              <vs-radio
                class="justify-content-start mb-2"
                v-model="genre"
                val="homme"
              >
                Homme
              </vs-radio>
              <vs-radio
                class="justify-content-start"
                v-model="genre"
                val="femme"
              >
                Femme
              </vs-radio>
            </div>
          </div>

          <div class="mt-5">
            <div class="d-grid gap-2 ">
              <button
                class="btn btn-conx  rounded-pill py-2"
                @click="
                  register(
                    nom,
                    prenom,
                    email,
                    password,
                    password_confirmation,
                    genre
                  )
                "
              >
                S'inscrire
              </button>
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

    <div id="dropDownSelect1"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    nom: undefined,
    prenom: undefined,
    email: undefined,
    password: undefined,
    password_confirmation: undefined,
    active_dlg: false,
    genre: "homme",
  }),
  methods: {
    async register(nom, prenom, email, password, password_confirmation, genre) {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        genre: genre,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const result = await fetch(
        "client/register",
        requestOptions
      );
      if (result.status === 201) {
        const res = await result.json();
        console.log(res);
        this.active_dlg = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/*[ FONT SIZE ]
///////////////////////////////////////////////////////////
*/
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
  padding-bottom: 50px;
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
  width: 300px;
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
input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus:-moz-placeholder {
  color: transparent;
}
input:focus::-moz-placeholder {
  color: transparent;
}
input:focus:-ms-input-placeholder {
  color: transparent;
}

textarea:focus::-webkit-input-placeholder {
  color: transparent;
}
textarea:focus:-moz-placeholder {
  color: transparent;
}
textarea:focus::-moz-placeholder {
  color: transparent;
}
textarea:focus:-ms-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #adadad;
}
input:-moz-placeholder {
  color: #adadad;
}
input::-moz-placeholder {
  color: #adadad;
}
input:-ms-input-placeholder {
  color: #adadad;
}

textarea::-webkit-input-placeholder {
  color: #adadad;
}
textarea:-moz-placeholder {
  color: #adadad;
}
textarea::-moz-placeholder {
  color: #adadad;
}
textarea:-ms-input-placeholder {
  color: #adadad;
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
  color: #525252;
  line-height: 1.2;
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
}
</style>
