import { createStore } from 'vuex'

const store = createStore({
    state: {
        //Define variables
        token: localStorage.getItem('token') || 0
    },

    mutations: {
        //Update variables value
        UPDATE_TOKEN(state, payload){
            state.token = payload;
        }
    }, 

    actions: {
        //Action to be perform onclick, onchange
        setToken(context, payload){
            localStorage.setItem('token', payload);
            context.commit('UPDATE_TOKEN', payload);            
        },

        removeToken(context){
            localStorage.removeItem('token');
            context.commit('UPDATE_TOKEN', 0)
        }
    },

    getters: {
        //get state variable value
        getToken: function(state){
            return state.token
        }
    }
});

export default store;