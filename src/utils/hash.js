import bcrypt from "bcryptjs";

// async function hashPassword(password) {
//   let genPassword = await bcrypt.genSalt(5);
//   return genPassword;
// }

const password = process.env.PASSWORD;

const hasher = (password, saltRounds, err, hash) => {
  bcrypt.hash(password, saltRounds, function (err, hash) {});
};

let result = hashPassword("ADEJUMO");
console.log(result);
