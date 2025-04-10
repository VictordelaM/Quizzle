import { User } from "../userModel/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async(req, res) => {
  try {
    const { username, password } = req.body;
    if (!username|| !password) {
      res.sendStatus(403);
      return;
    }
    const user = await User.findOne({ username:username}).lean();
    if (user === null) {
      res.status(401).json("user doesn`t exist");
      return;
    }
    const compareResult = await bcrypt.compare(password, user.passwordHash);
    if (!compareResult) {
        res.status(401).json("Falsches Passwort");
    } else {
      const token = jwt.sign({ id: user.userId, username: user.username }, process.env.JWT_SECRET);
      res.cookie("token", token, { httpOnly: false, secure: true, sameSite: 'none' });
      res.json({ status: "ok", token: token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
}
}