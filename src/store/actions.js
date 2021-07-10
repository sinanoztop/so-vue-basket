const setItem = ({ commit }, data) => {
  commit("setItem", data);
};

const toggleBasket = ({ commit }, data) => {
  commit("setBasket", data);
};

export default {
  setItem,
  toggleBasket,
};
