const state = {
    auth: [],
    role: "",
    loading: true,
    company: [],
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        'Content-Type': 'application/json'
    },
}

const getters = {
    auth: state => state.auth,
    role: state => state.role,
    loading: state => state.loading,
    company: state => state.company,
}

const actions = {

    async auth({
        commit
    }, param) {

        let data = new FormData()
        data.append("email", param[0])
        data.append("password", param[1])

        var config = {
            method: 'post',
            url: process.env.VUE_APP_BASE_URL + "datafc/auth/admin-derct",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        };

        return new Promise((resolve, reject) => {
            axios(config)
                .then(response => {
                    let aut_Info = response.data;
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
    },



    async getAuthinfo({
        commit
    }) {
        var token = localStorage.getItem('accessToken')
        if (token) {
            var config = {
                // method: 'post',
                // url: process.env.VUE_APP_BASE_URL + 'datafc/auth/info',
                headers: state.headers,
            };

            return new Promise((resolve, reject) => {
                axios.post('datafc/auth/info', {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                            'Content-Type': 'application/json'
                        }
                    })
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

    async getCompnyInfo({
        commit
    }) {

        var config = {
            method: 'GIT',
            url: 'company/info',
            headers: state.headers,
        };

        return new Promise((resolve, reject) => {
            axios(config)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    commit('setCompany', result)
                    resolve(result)
                })
                .catch((error) => reject(error));
        })
    },

}

const mutations = {
    setAuth: (state, auth) => (state.auth = auth),
    setCompany: (state, company) => (state.company = company),
}

export default {
    state,
    getters,
    actions,
    mutations
}