export default function (instance) {
  return {
    getUsers(payload) {
      return instance.post("user/read", payload);
    },
    signUp(payload) {
      return instance.post("user/sign-up", payload);
    },
    logout() {
      return instance.delete("user/logout");
    },
  };
}
