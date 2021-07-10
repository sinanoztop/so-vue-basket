const setItem = (state, data) => {
  state.items = data;
};
const setBasket = (state, data) => {
  let _items = state.basket;
  let _filter_result = _items.filter((value) => {
    return value.id == data.id;
  });
  if (data.type == "increase") {
    if (_filter_result.length > 0) {
      let _result = state.basket.map((value) => {
        return value.id == data.id
          ? { ...value, quantity: value.quantity + 1 }
          : value;
      });
      state.basket = _result;
    } else {
      state.basket.push({ id: data.id, quantity: 1 });
    }
  } else {
    if (_filter_result.length > 0) {
      let _result = state.basket.map((value) => {
        return value.id == data.id
          ? { ...value, quantity: value.quantity - 1 }
          : value;
      });
      state.basket = _result;
    }
  }
};
export default {
  setItem,
  setBasket,
};
