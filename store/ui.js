export const state = () => ({
    appDrawer: false,
});

export const getters = {
    appDrawer(state) {
        return state.appDrawer
    },
};


export const mutations = {
    setAppDrawer(state, payload) {
        state.appDrawer = payload
    },
};
