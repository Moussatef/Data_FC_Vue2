import axios from 'axios';

const state = {
    client: [],
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        'Content-Type': 'application/json'
    },
}

const getters = {
    client: state => state.client,
}

const actions = {
    async getAllClient({
        commit
    }) {
        var token = localStorage.getItem('accessToken')
        if (token) {

            var requestOptions = {
                headers: state.headers,

            };

            axios.get("client/info", requestOptions).then((result) => {
                // console.log(result.data);
                commit('setClient', result.data.data)
            }).catch((error) => {
                console.log(error);
            })
        }

    },

    async deletePersonne({
        commit
    }, param) {

        const data = new FormData();
        data.append("personne_id", param[0]);
        data.append("nom", param[1]);
        data.append("prenom", param[2]);
        data.append("email", param[3]);

        var config = {
            method: "post",
            url: "admin/delete-personne",
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
                    // console.log(personne);
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