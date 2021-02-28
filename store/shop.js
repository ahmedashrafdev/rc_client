import http  from "../repositories/Repository.js";

export const state = () => ({
    loading: false,
    couponLoading: false,
    couponNotFound: null,
    cart: []
});

export const getters = {
    loading(state){
        return state.loading
    },
    couponLoading(state){
        return state.couponLoading
    },
    couponNotFound(state){
        return state.couponNotFound
    },
    cart(state){
        return state.cart
    },
    

};


export const mutations = {
    setLoading(state , payload){
        state.loading = payload
    },
    setCart(state , payload){
        state.cart = payload
    },
    setCouponLoading(state , payload){
        state.couponLoading = payload
    },
    setCouponNotFound(state , payload){
        state.couponNotFound = payload
    }

    
};

export const actions = {
    get({commit} , ip) 
    {
        commit('setLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .post(`cart/get` , {ip : ip})
            .then( res => {
                commit('setCart' , res.data)
                commit('setLoading' , false)
                resolve(res.data);
            })
            .catch(e => {
                reject(e.response.data);
            })
          })
    },
    create({commit , dispatch} , payload) 
    {
        commit('setLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .post(`cart` , payload)
            .then( res => {
                dispatch('get' , {ip : payload.ip})
                const snackbar = {
                    active : true,
                    text: 'item added to cart successfully'
                }
                commit('ui/setSnackbar' , snackbar , { root: true })
                resolve(res.data);
            })
            .catch(e => {
                reject(e.response.data);
            })
          })
    },
    update({commit , dispatch} , payload) 
    {
        commit('setLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .put(`cart/${payload.isbn}` , payload.payload)
            .then( res => {
                dispatch('get' , {ip : payload.payload.ip})
                commit('setLoading' , false)
                resolve(res.data);
            })
            .catch(e => {
                reject(e.response.data);
            })
          })
    },
    checkout({commit} , payload) 
    {
        commit('setLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .post(`checkout` , payload)
            .then( res => {
                commit('setLoading' , false)
                commit('setCart' , false)
                commit('setCart' , [])

                resolve(res.data);
            })
            .catch(e => {
                reject(e.response.data);
            })
          })
    },
    applyShipping({commit , dispatch} , payload) 
    {
        commit('setLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .post(`cart/shipping` , payload)
            .then( res => {
                commit('setLoading' , false)
                dispatch('get' , {ip : payload.ip})
                resolve(res.data);
            })
            .catch(e => {
                reject(e.response.data);
            })
          })
    },
    applyCoupon({commit , dispatch} , payload){
        commit('setCouponLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .post(`cart/coupon` , payload)
            .then( res => {
                commit('setCouponLoading' , false)
                commit('setCouponNotFound' , null)
                dispatch('get' , {ip : payload.ip})
                const snackbar = {
                    active : true,
                    text: 'Coupon Applie Successfully'
                }
                commit('ui/setSnackbar' , snackbar , { root: true })
                resolve(res.data);
            })
            .catch(e => {
                commit('setCouponNotFound' , e.response.data)
                commit('setCouponLoading' , false)
                reject(e.response.data);
            })
          })
    },
    delete({commit , dispatch} , payload) 
    {
        commit('setLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .post(`cart/delete` , payload)
            .then( res => {
                dispatch('get' , {ip : payload.ip})
                commit('setLoading' , false)
                resolve(res.data);
            })
            .catch(e => {
                reject(e.response.data);
            })
          })
    },
    
  
};
