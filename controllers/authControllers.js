import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";

const register = async (req, res) => {
  const newUser = await userModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ newUser });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  res.send("login");
};

export { register, login };
