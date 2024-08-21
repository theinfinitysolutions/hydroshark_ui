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
