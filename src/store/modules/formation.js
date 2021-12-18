import axios from 'axios'

const state = {
    formationEnt: [],
    formation: [],
    categories: [],
    StatusCategory: false,
    AjouteErr: undefined,
    loading_F: true,
    loading_vd: false,
}

const getters = {
    formationEnt: state => state.formationEnt,
    formation: state => state.formation,
    categories: state => state.categories,
    StatusCategory: state => state.statusCategory,
    AjouteErr: state => state.ajouteErr,
    loading_vd: state => state.loading_vd,
    loading_F: state => state.loading_F,
}

const actions = {
    // get all formation
    async getAllFormationEn({
        commit
    }) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        axios.get("formation", requestOptions).then((result) => {
            // console.log(result.data);
            commit('setFormations', result.data)
            state.loading = false;

        }).catch((error) => {
            console.log(error);
        })

    },

    //obtenir toutes les catégories avec des formations
    async getAllCategories({
        commit
    }) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        axios.get("formation/categories", requestOptions).then((result) => {
            // console.log(result.data.data);
            commit('setCategory', result.data.data)
            state.loading = false;
        }).catch((error) => {
            console.log(error);
        })

    },

    //function add type of formation

    async addTypeFormation({
        commit
    }, param) {

        var data = JSON.stringify({
            "codeType": param[0],
            "titre": param[1]
        });

        var config = {
            method: 'post',
            url: 'add/type-formation',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                'Content-Type': 'application/json'
            },
            data: data
        };
        return new Promise((resolve, reject) => {

            axios(config)
                .then(response => {
                    let formation = response.data.formationAll;
                    // consoled for testing
                    // console.log(formation);
                    commit('setCategory', formation);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })

        })
    },

    async formationParam({
        commit
    }, param) {


        var config = {
            method: 'get',
            url: 'admin/formation/' + param,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                'Content-Type': 'application/json'
            },

        };

        axios(config).then((res) => {
            const formation = res.data.data[0]
            // console.log(formation);
            commit('oneFormation', formation);
        }).catch((error) => {
            console.log(error);
        })



    },


    //function add  formation
    async addFormation({
        commit
    }, param) {

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
            url: "add/formation",
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

    //update formation
    async updateFormation({
        commit
    }, param) {

        const data = new FormData();
        data.append("codeFormation", param[0]);
        data.append("titre", param[1]);
        data.append("objectifs", param[2]);
        data.append("populationCible", param[3]);
        data.append("dureeFormation", param[4]);
        data.append("programmeFormation", param[5]);
        data.append("imgFormation", param[6]);
        data.append("typeFormation", param[7]);
        data.append("id", param[8]);

        var config = {
            method: "post",
            url: "update/formation",
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
                    let formation = response.data;
                    // consoled for testing
                    // console.log(formation);
                    commit('updateFormation', formation.formation[0]);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })
        })
    },



    // function remove category
    async removeCategorie({
        commit
    }, param) {


        var data = JSON.stringify({
            "categorie_id": param[0],
        });

        var config = {
            method: "post",
            url: "categories-remove",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
            },
            data: data

        }
        return new Promise((resolve, reject) => {
            axios(config)
                .then(response => {
                    let res = response.data;
                    // consoled for testing
                    // console.log(formation);
                    commit('removeCategorie', param[0]);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })
        })


    },


    // function remove formation
    async removeFormation({
        commit
    }, param) {
        var data = JSON.stringify({
            "formation_id": param[0],
        });
        var config = {
            method: "post",
            url: "formation-remove",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
            },
            data: data
        }
        return new Promise((resolve, reject) => {
            axios(config)
                .then(response => {
                    let res = response.data;
                    // consoled for testing
                    // console.log(formation);
                    commit('removeFormation', param);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })
        })

    },

    //add annance video formaton :
    async postAnnance({
        commit
    }, param) {
        state.loading_vd = true;
        let data = new FormData();
        data.append("formation_id", param[0]);
        if (param[1]) data.append("video", param[1]);
        if (param[2]) data.append("videoID", param[2]);

        data.append("title", param[3]);
        data.append("description", param[4]);
        var config = {
            method: "post",
            url: "admin/add-annance",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
                "Content-Type": "multipart/form-data",
                Connection: "keep-alive",
            },
            data: data,
        };

        return new Promise((resolve, reject) => {
            axios(config)
                .then(response => {
                    let formation = response.data;
                    state.loading_vd = false;
                    // consoled for testing
                    console.log(formation.formation[0]);
                    commit('oneFormation', formation.formation[0]);
                    resolve(formation.formation[0])
                })
                .catch(error => {
                    reject(error)
                })
        })

    },



}
const mutations = {
    setFormations: (state, formations) => (state.formationEnt = formations),
    setCategory: (state, categories) => (state.categories = categories),
    oneFormation: (state, param) => {
        state.formation = param
    },



    addCategory: function (state, categories) {
        state.categories.unshift(categories[0]);
    },
    addFormation: (state, formation) => {
        state.categories[state.categories.findIndex(el => el.id == formation.formationcategorie_id)].formation.push({
            ...formation
        });
        // console.log(res);
    },

    setCategoryErr: (state, err) => {
        // state.StatusCategory = true
        state.AjouteErr = err
    },

    removeCategorie: (state, categorie_id) => {
        state.categories.splice(state.categories.findIndex(el => el.id == categorie_id), 1);

    },
    updateFormation: (state, param) => {
        let categorieIndex = state.categories.findIndex(el => el.id == param.formationcategorie_id)
        let formationIndex = state.categories[categorieIndex].formation.findIndex(el => el.id == param.id);
        state.categories[categorieIndex].formation.splice(formationIndex, 1, param)

    },

    removeFormation: (state, param) => {
        let categorieIndex = state.categories.findIndex(el => el.id == param[1])
        let formationIndex = state.categories[categorieIndex].formation.findIndex(el => el.id == param[0]);
        state.categories[categorieIndex].formation.splice(formationIndex, 1)

    },

}

export default {
    state,
    getters,
    actions,
    mutations
}