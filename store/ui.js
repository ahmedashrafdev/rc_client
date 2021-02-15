export const state = () => ({
    appDrawer: false,
    deleteLoading: false,
    DCPOpenned:false,
    deleteModal : {
        active: false,
        name:'',
        id:'',
        model:'',
    },
    editAddress:{
        active : false,
        id:null,
    },
    addAddress:{
        active : false,
    },
    snackbar : {
        active: false,
        text: '',
    },

});

export const getters = {
    appDrawer(state) {
        return state.appDrawer
    },
    editAddress(state) {
        return state.editAddress
    },
    addAddress(state) {
        return state.addAddress
    },
    deleteModal(state) {
        return state.deleteModal
    },
    deleteLoading(state) {
        return state.deleteLoading
    },
    snackbar(state){
        return state.snackbar
    },
    DCPOpenned(state) {
        return state.DCPOpenned
    }
};


export const mutations = {
    setAppDrawer(state, payload) {
        state.appDrawer = payload
    },
    setSnackbar(state , payload){
        state.snackbar = payload
    },
    toggleSnackbar(state){
        state.snackbar.active = !state.snackbar.active
    },
    clearSnackbar(state){
        const snackbar = {
            active: false,
            text:'',
        }
        state.snackbar = snackbar
    },
    setDCPOpenned(state) {
        state.DCPOpenned = !state.DCPOpenned
    },
    setDeleteModal(state , payload) {
        state.deleteModal = payload
    },
    clearDeleteModal(state) {
        const modal = {
            active: false,
            name:'',
            id:'',
            model:'',
        }
        state.deleteModal = modal
    },
    toggleDeleteModal(state){
        state.deleteModal.active = !state.deleteModal.active
    },
    toggleEditAddress(state){
        state.editAddress.active = !state.editAddress.active
    },
    setEditAddress(state , payload){
        state.editAddress = payload
    },
    clearEditAddress(state){
        const editAddress = {
            active : false,
            id:null,
        }
        state.editAddress = editAddress
    },
    setAddAddress(state , payload){
        state.addAddress = payload
    },
    clearAddAddress(state){
        const addAddress = {
            active : false,
        }
        state.addAddress = addAddress
    },
    togglAddAddress(state){
        state.addAddress.active = !state.addAddress.active

    }
    
};
