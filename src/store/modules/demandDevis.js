import axios from 'axios'

const state = {

    demandsDevis: [],


}

const getters = {
    demandsDevis: state => state.demandsDevis,

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
            "nbperson": param[8]
        });

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
                })
                .catch(error => {
                    reject(error)
                })

        })
    }

}

const mutations = {
    setDemand: (state, demand) => (state.demand = demand)

}