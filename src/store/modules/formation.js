import axios from 'axios'

const state = {
    formationEnt: [],
    categories: [],
}

const getters = {
    formationEnt: state => state.formationEnt,
    categories: state => state.categories,
}

const actions = {
    async getAllFormationEn({ commit }) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const response = await fetch("http://127.0.0.1:8000/api/formation", requestOptions)
        if (response.status === 200) {
            const result = await response.json();
            console.log(result.data);
            commit('setFormations', result.data)

        }

    },
    async getAllCategories({ commit }) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const response = await fetch("http://127.0.0.1:8000/api/formation/categories", requestOptions)
        if (response.status === 200) {
            const result = await response.json();
            console.log(result.data);
            commit('setCategory', result.data)

        }

    },

    async addTypeFormation({ commit }, param) {

        var data = JSON.stringify({
            "codeType": param[0],
            "titre": param[1]
        });

        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/add/type-formation',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
        // .then((res) => {
        //     // commit('setAllCategory', res.formationAll)
        //     console.log(res);
        // })
    }
}

const mutations = {
    setFormations: (state, formations) => (state.formationEnt = formations),
    setCategory: (state, categories) => (state.categories = categories),
    addCategory: function (state, categories) {
        state.categories.unshift(categories[0]);
    },

    setAllCategory: (state, categories) => {
        // state.loading = false;
        (state.categories.push(...categories));
    },





}

export default {
    state,
    getters,
    actions,
    mutations
}