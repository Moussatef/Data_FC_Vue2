import axios from 'axios'

const state = {
    formationEnt: [],
    categories: [],
    StatusCategory: false,
    AjouteErr: undefined,
}

const getters = {
    formationEnt: state => state.formationEnt,
    categories: state => state.categories,
    StatusCategory: state => state.statusCategory,
    AjouteErr: state => state.ajouteErr
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
            // console.log(result.data);
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
            // console.log(result.data);
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
        return new Promise((resolve, reject) => {

            axios(config)
                .then(response => {
                    let formation = response.data.formationAll;
                    // consoled for testing
                    console.log(formation);
                    commit('setCategory', formation);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })

        })
    },
    async addFormation({ commit }, param) {

        const data = new FormData();
        data.append("codeFormation", param[0]);
        data.append("titre", param[1]);
        data.append("objectifs", param[2]);
        data.append("populationCible", param[3]);
        data.append("dureeFormation", param[4]);
        data.append("programmeFormation", param[5]);
        data.append("imgFormation", param[6]);
        data.append("typeFormation", param[7]);

        var config = {
            method: "post",
            url: "http://127.0.0.1:8000/api/add/formation",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            data: data,
        };

        return new Promise((resolve, reject) => {
            axios(config)
                .then(response => {
                    let formation = response.data.formation[0];
                    // consoled for testing
                    // console.log(formation);
                    commit('addFormation', formation);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    async removeCategorie({ commit }, param) {



    },
}
const mutations = {
    setFormations: (state, formations) => (state.formationEnt = formations),
    setCategory: (state, categories) => (state.categories = categories),
    addCategory: function (state, categories) {
        state.categories.unshift(categories[0]);
    },
    addFormation: (state, formation) => {
        state.categories[state.categories.findIndex(el => el.id == formation.formationcategorie_id)].formation.push({ ...formation });
        // console.log(res);
    },

    setAllCategory: (state, categories) => {
        // state.loading = false;
        // state.StatusCategory = true
        (state.categories.push(...categories));
    },
    setCategoryErr: (state, err) => {
        // state.StatusCategory = true
        state.AjouteErr = err
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}