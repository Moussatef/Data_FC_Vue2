

const state = {
    auth: [],
    role: "",
    loading: true,
}

const getters = {
    auth: state => state.auth,
    role: state => state.role,
    loading : state => state.loading,
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

}

const mutations = {
    setAuth: (state, auth) => (state.auth = auth),



}

export default {
    state,
    getters,
    actions,
    mutations
}