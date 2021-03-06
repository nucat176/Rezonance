export const signup = (user, success, error) => {
  // debugger
  $.ajax({
    type: "POST",
    url: `api/users`,
    data: {user},
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    type: "POST",
    url: `api/session`,
    data: {user},
    success,
    error
  });
};

export const logout = success => {
  $.ajax({
    type: "DELETE",
    url: `api/session`,
    success,
    error: () => {
      console.log("Logout error in SessionApiUtil#logout");
    }
  });
};
