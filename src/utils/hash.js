import bcrypt from "bcrypt";

// async function hashPassword(password) {
//   let genPassword = await bcrypt.genSalt(5);
//   return genPassword;
// }

// const password = process.env.PASSWORD;

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

export const passwordMatches = async (password, userpassword) => {
  return await bcrypt.compare(password, userpassword);
};
