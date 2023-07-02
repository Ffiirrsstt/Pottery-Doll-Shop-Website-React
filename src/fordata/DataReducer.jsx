export default function DataReducer(state, action) {
  let updatedProducts = { ...state };
  switch (action.type) {
    case "UPDATE":
      if (
        action.payload &&
        action.payload.pricecurrently &&
        action.payload.id
      ) {
        updatedProducts.allproduct[action.payload.id - 1].forSellItem =
          action.payload.pricecurrently;
      }
      return updatedProducts;
    case "UPDATECART":
      return { ...state, itemcart: action.payload };
    case "UPDATETOTAL": {
      let sum = state.allproduct.reduce(
        (total, item) => total + item.forSellItem,
        0
      );
      return { ...state, total: sum };
    }
    case "UPDATETOTALFORCART": {
      action.payload.map((item, index) =>
        item == 0 ? (state.allproduct[index].forSellItem = 0) : item
      );
      return { ...state };
    }
    case "RESETTOTAL":
      return { ...state, total: 0 };
    case "UPDATEAMOUT": {
      let sum = 0;
      state.itemcart.map((item, index) =>
        item !== 0 ? (sum += action.payload[index]) : 0
      );
      return { ...state, amountitem: sum };
    }
    default:
      return state;
  }
}
