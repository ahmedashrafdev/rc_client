import http from "../repositories/Repository.js";
export const state = () => ({
    loading: false,
    registerLoading: false,
});

export const getters = {
    loading(state){
        return state.loading
    },
    registerLoading(state){
        return state.loading
    }
};


export const mutations = {
   setLoading(state , payload){
       state.loading = payload
   },
    setRegisterLoading(state , payload){
        state.registerLoading = payload
    },
};

export const actions = {
    login({commit},payload) {
        commit('setLoading' , true)
        payload.auth.loginWith('local', { data: payload.form })
        .then(d => {
            commit('setLoading' , false)
            const snackbar = {
                active : true,
                text: 'logged in successfully'
            }
            commit('ui/setSnackbar' , snackbar , { root: true })
            console.log(d)
        })
    },
    register({commit} , payload) 
    {
        commit('setRegisterLoading' , true)
        return new Promise((resolve, reject) => {
            http
            .post("register" , payload.form )
            .then( async (data) => {
                payload.auth.loginWith('local', { data: {email :payload.form.email , password : payload.form.password} })
                commit('setRegisterLoading' , false)
                const snackbar = {
                    active : true,
                    text: 'registerd successfully'
                }
                commit('ui/setSnackbar' , snackbar , { root: true })
                resolve(data);
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
