import http from "../repositories/Repository.js";
export const state = () => ({
    loading: false,
    products: [],
});

export const getters = {
    loading(state){
        return state.loading
    },
    products(state){
        return state.products
    }
};


export const mutations = {
   setLoading(state , payload){
       state.loading = payload
   },
    setProducts(state , payload){
        state.products = payload
    },
};

export const actions = {
    get({commit} , payload) 
    {
        commit('setLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .get("product" , payload.form )
            .then( res => {
                commit('setProducts' , res.data)
                console.log(res.data);
                resolve(res.data);
            })
            .catch(e => {
                reject(e.response.data);
            })
          })
    },
    me({commit} , payload){
        commit('setLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .get("user")
            .then(res => {
                payload.setUser(res.data)
                commit('setLoading' , false)
                resolve(res.data);
            })
            .catch(e => {
                payload.logout();
                commit('setLoading' , false)
                reject(e.response.data);
            })
          })
    }
};
