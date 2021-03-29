const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { email } = req.body;
  console.log("====================================");
  console.log(req.body);
  console.log("====================================");
  try {
    if (await User.findOne({ email })) {
      return res.send({ Error: "User already exists." });
    }

    const user = await User.create(req.body);

    user.password = null;

    return res.send({ Success: "Registration Successful.", user });
  } catch (error) {
    return res.send({ Error: "User not registered, please try again" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");

    console.log("====================================");
    console.log(user);
    console.log("====================================");

    if (user) {
      if (user.password === password) {
        user.password = null;
        return res.send({ Success: "Login successful.", user });
      } else {
        return res.send({ Error: "Incorrect Password, please try again." });
      }
    } else {
      return res.send({ Error: "User not found, please register." });
    }
  } catch (error) {
    return res.send({ Error: "Login failed. Please try again" });
  }
});

router.get("/show", async (req, res) => {
  return res.send("Show all users");
});
router.put("/update", async (req, res) => {
  return res.send("User Updated");
});
router.delete("/delete", async (req, res) => {
  return res.send("User Deleted");
});

module.exports = (app) => app.use("/auth", router);
