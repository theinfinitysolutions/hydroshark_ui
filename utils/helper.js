import instance from "./instance";
import { useStore } from "./store";

export const getUser = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  instance
    .get("/accounts/user/")
    .then((res) => {
      console.log("res", res);
      useStore.setState({ user: res.data });
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const getCart = () => {
  const token = localStorage.getItem("token");
  let cartId = null;

  if (!token) {
    return;
  }

  instance
    .get("/billing/cart/")
    .then((res) => {
      console.log("res test121212121212", res);
      cartId = res.data.id;
      useStore.setState({
        cartData: { listCount: res.data.cart_items.length },
      });
    })
    .catch((err) => {
      useStore.setState({ activeCartId: { id: "" } });
      console.log("err", err);
    });

  return cartId;
};
