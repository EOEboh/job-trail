import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";
import { hashPassword } from "../utils/hashPassword.js";
import { comparePassword } from "../utils/comparePassword.js";
import { UnauthenticatedError } from "../errors/customErrors.js";

const register = async (req, res) => {
  const isFirstAccount = (await userModel.countDocuments()) === 0;
  if (isFirstAccount) {
    req.body.role = "admin";
  } else {
    req.body.role = "user";
  }

  const hashedPassword = await hashPassword(req.body.password);

  req.body.password = hashedPassword;

  await userModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User successfully created!" });
};

const login = async (req, res) => {
  // check if user exists
  // check if password is correct
  const user = await userModel.findOne({ email: req.body.email });

  if (!user) throw new UnauthenticatedError("invalid user credentials!");

  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );
  console.log("isPasswordCorrect", isPasswordCorrect);

  if (!isPasswordCorrect)
    throw new UnauthenticatedError("invalid username or password");

  res.send("login");
};

export { register, login };
