const router = require("express").Router();
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const cryptoJS = require("crypto-js");

//Register
router.post("/register", async (req, res) => {
  const { userName, password, email } = req.body;

  if (!(userName, password, email)) {
    res.status(403).json("you must enter all required input");
  } else {
    const hashedPassword = cryptoJS.AES.encrypt(
      password,
      process.env.PASS_KEY
    ).toString();

    let newUser = UserModel({
      userName,
      email,
      password: hashedPassword,
    });

    try {
      const savedUser = await newUser.save();
      const { password, ...other } = savedUser._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//login

router.post("/login", async (req, res) => {
  const { password, email } = req.body;

  if (!(password, email)) {
    res.status(403).json("you must enter all required input");
  } else {
    try {
      const user = await UserModel.findOne({ email });
    

      if (user) {

        let decryptPass = cryptoJS.AES.decrypt(user.password, process.env.PASS_KEY)
        .toString(cryptoJS.enc.Utf8)
        console.log(decryptPass);
        if (password == decryptPass)
         {
          const token =  jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.TOKEN_KEY,
            { expiresIn: "2d" }
          );
          const { password, ...other } = user._doc;
          res.status(200).json({ ...other, token });
        } else {
          res.status(500).json("wrong password");
        }
      } else {
        res.status.json("email is not exist");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
