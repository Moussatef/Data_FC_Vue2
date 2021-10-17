

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

    }
}

const mutations = {
    setFormations: (state, formations) => (state.formationEnt = formations),
    setCategory: (state, categories) => (state.categories = categories),



}

export default {
    state,
    getters,
    actions,
    mutations
}