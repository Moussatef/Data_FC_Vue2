import axios from 'axios'

const state = {
    messages: [],
}

const getters = {
    messages: state => state.messages,
}

const actions = {

    async sendMessage({ commit }, param) {
        var data = JSON.stringify({
            "nom": param[0],
            "prenom": param[1],
            "email": param[2],
            "subject": param[3],
            "message": param[4],

        });
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/send-message',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        };

        return new Promise((resolve, reject) => {

            axios(config)
                .then(response => {
                    let formation = response.data;
                    // consoled for testing
                    // console.log(formation);
                    // commit('setCategory', formation);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })

        })

    },



    // async getAllClient({ commit }) {
    //     var token = localStorage.getItem('accessToken')
    //     if (token) {
    //         var myHeaders = new Headers();
    //         myHeaders.append("Authorization", "Bearer " + token);

    //         var requestOptions = {
    //             method: 'GET',
    //             headers: myHeaders,
    //             redirect: 'follow'
    //         };

    //         const response = await fetch("http://127.0.0.1:8000/api/client/info", requestOptions)
    //         if (response.status === 200) {
    //             const result = await response.json();
    //             console.log(result.data);
    //             commit('setMessages', result.data)

    //         }
    //     }

    // },

}

const mutations = {
    setMessages: (state, messages) => (state.messages = messages),



}

export default {
    state,
    getters,
    actions,
    mutations
}