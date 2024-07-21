export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } =
      require.body;
  } catch (error) {}
};

export const login = (req, res) => {
  console.log("loginUser");
  res.send("Login successful");
};

export const logout = (req, res) => {
  console.log("logoutUser");
  res.send("Logout successful");
};
