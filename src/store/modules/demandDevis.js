import axios from 'axios'

const state = {

    demandsDevisPhy: [],
    demandsDevisMo : [],

    demandLoading: false,


}

const getters = {
    demandsDevisPhy: state => state.demandsDevisPhy,
    demandsDevisMo: state => state.demandsDevisMo,
    demandLoading: state => state.demandLoading,

}

const actions = {

    async sendDemandPersonPh({
        commit
    }, param) {
        var data = JSON.stringify({
            "formation_id": param[0],
            "firstname": param[1],
            "lastname": param[2],
            "email": param[3],
            "phone": param[4],
            "address": param[5],
            "typedorganisme": param[6],
            "organismename": param[7],
            "nbperson": param[8],
        });
        state.demandLoading = true;

        var config = {
            method: 'post',
            url: 'demand-devis/person-physique',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        };
        return new Promise((resolve, reject) => {

            axios(config)
                .then(response => {
                    let demand = response.data;
                    // consoled for testing
                    console.log(demand);
                    commit('setDemand', demand);
                    resolve('Success')
                    state.demandLoading =false;
                })
                .catch(error => {
                    reject(error)
                    state.demandLoading =false;
                })

        })
    },


    async sendDemandPersonMo({
        commit
    }, param) {
        var data = JSON.stringify({
            "formation_id": param[0],
            "companyname": param[1],
            "raisonsociale": param[2],
            "email": param[3],
            "phone": param[4],
            "address": param[5],
            "responsable": param[6],
            "responsablephone": param[7],
            "nbperson": param[8]
        });

        var config = {
            method: 'post',
            url: 'demand-devis/person-morale',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        };
        return new Promise((resolve, reject) => {

            axios(config)
                .then(response => {
                    let demand = response.data;
                    // consoled for testing
                    console.log(demand);
                    commit('setDemandMo', demand);
                    resolve('Success')
                })
                .catch(error => {
                    reject(error)
                })

        })
    }

}

const mutations = {
    setDemand: (state, demand) => (state.demandsDevisPhy = demand),
    setDemandMo: (state, demand) => (state.demandsDevisMo = demand)

}

export default {
    state,
    getters,
    actions,
    mutations
}