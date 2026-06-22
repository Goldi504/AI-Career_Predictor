// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   user: null,
//   token: localStorage.getItem("token") || null,

//   setUser: (user) =>
//     set({
//       user,
//     }),

//   login: (token, user) => {
//     localStorage.setItem("token", token);

//     set({
//       token,
//       user,
//     });
//   },

//   logout: () => {
//     localStorage.removeItem("token");

//     set({
//       token: null,
//       user: null,
//       // isAuthenticated: false,
//     });
//   },
// }));

// export default useAuthStore;/

import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")),

  login: (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    set({ token, user });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    set({
      token: null,
      user: null
    });
  }
}));

export default useAuthStore;