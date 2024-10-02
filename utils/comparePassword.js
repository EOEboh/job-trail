import bcrypt from "bcryptjs";

async function comparePassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

export { comparePassword };
