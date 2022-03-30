import firebase from 'firebase/app';

export default {
  // dispatch for actions
  // commit for mutations
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('SET_USER', email);
      } catch (e) {
        console.log('LOGIN ERROR', e);
      }
    },
    async logout({ commit }) {
      try {
        await firebase.auth().signOut();
        commit('SET_USER', false);
      } catch (e) {
        console.log('LOGOUT ERROR', e);
      }
    },
    async register({ commit }, { email, password, name }) {
      let emailExists;
      try {
        emailExists = await firebase.auth().fetchSignInMethodsForEmail(email); // check if email exists. returns an array
        console.log('exists', emailExists.length);
      } catch (e) {
        console.log('EMAIL CHECK ERROR', e);
      }
      if (!emailExists.length) {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password);
          commit('SET_USER', email);
        } catch (e) {
          console.log('REGISTER ERROR', e);
        }
      }
    },
  },
};
