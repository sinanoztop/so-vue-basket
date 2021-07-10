import { createStore } from "vuex";
import states from "./state";
import actions from "./actions";
import mutations from "./mutations.js";

export default createStore({
  state: states,
  mutations: mutations,
  actions: actions,
  modules: {},
});
