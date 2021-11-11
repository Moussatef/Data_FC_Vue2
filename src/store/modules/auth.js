

const state = {
    auth: [],
    role: "",
    loading: true,
    company:[],
}

const getters = {
    auth: state => state.auth,
    role: state => state.role,
    loading : state => state.loading,
    company : state => state.company,
}

const actions = {
    async getAuthinfo({ commit }) {
        var token = localStorage.getItem('accessToken')
        if (token) {
            var config = {
                method: 'post',
                url: 'http://127.0.0.1:8000/api/datafc/auth/info',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                    'Content-Type': 'application/json'
                },
            };

            return new Promise((resolve, reject) => {

                axios(config)
                    .then(response => {
                        let aut_Info = response.data.data[0];
                        // consoled for testing
                        // console.log(aut_Info);
                        commit('setAuth', aut_Info);
                        resolve(aut_Info)
                        state.loading = false;
                    })
                    .catch(error => {
                        reject(error)
                    })

            })
        }

    },

    async getCompnyInfo({commit}) {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
  
        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
  
        fetch("http://127.0.0.1:8000/api/company/info", requestOptions)
          .then((response) => response.json())
          .then((result) => {
              console.log(result)
              commit('setCompany',result)
            })
          .catch((error) => console.log("error", error));
      },

}

const mutations = {
    setAuth: (state, auth) => (state.auth = auth),
    setCompany : (state, company) => (state.company = company),



}

export default {
    state,
    getters,
    actions,
    mutations
}