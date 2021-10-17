

const state = {
    client: [],
}

const getters = {
    client: state => state.client,
}

const actions = {
    async getAllClient({ commit }) {
        var token = localStorage.getItem('token')
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
                console.log(result.data);
                commit('setClient', result.data)

            }
        }

    },

}

const mutations = {
    setClient: (state, client) => (state.client = client),



}

export default {
    state,
    getters,
    actions,
    mutations
}