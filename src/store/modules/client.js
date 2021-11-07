

const state = {
    client: [],
}

const getters = {
    client: state => state.client,
}

const actions = {
    async getAllClient({ commit }) {
        var token = localStorage.getItem('accessToken')
        if (token) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + token);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch("http://127.0.0.1:8000/api/client/info", requestOptions)
            if (response.status === 200) {
                const result = await response.json();
                // console.log(result.data);
                commit('setClient', result.data)

            }
        }

    },

    async deletePersonne({ commit }, param) {

        const data = new FormData();
        data.append("personne_id", param[0]);
        data.append("nom", param[1]);
        data.append("prenom", param[2]);
        data.append("email", param[3]);

        var config = {
            method: "post",
            url: "http://127.0.0.1:8000/api/admin/delete-personne",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
            },
            data: data,
        };

        return new Promise((resolve, reject) => {
            axios(config)
                .then(response => {
                    let personne = response.data;
                    // consoled for testing
                    console.log(personne);
                    commit('deletepersonne', param[0]);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

}

const mutations = {
    setClient: (state, client) => (state.client = client),

    deletepersonne: (state, client) => {

        state.client.splice(state.client.findIndex(el => el.id == client), 1);

    }



}

export default {
    state,
    getters,
    actions,
    mutations
}