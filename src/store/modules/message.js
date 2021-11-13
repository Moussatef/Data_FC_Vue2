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
            url: 'send-message',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        };

        return new Promise((resolve, reject) => {

            axios(config)
                .then(response => {
                    let message = response.data.message;
                    // consoled for testing
                    console.log(message);
                    commit('addMessages', message);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })

        })

    },
    async adminSendMessage({ commit }, param) {
        var data = JSON.stringify({
            "id": param[0],
            "title": param[1],
            "subject": param[2],
            "message": param[3],

        });
        var config = {
            method: 'post',
            url: 'admin/send-message',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),

            },
            data: data
        };

        return new Promise((resolve, reject) => {

            axios(config)
                .then(response => {
                    let message = response.data.message;
                    // consoled for testing
                    console.log(message);
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

    //         const response = await fetch("client/info", requestOptions)
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
    addMessages: (state, messages) => (state.messages.unshift(messages)),

}

export default {
    state,
    getters,
    actions,
    mutations
}