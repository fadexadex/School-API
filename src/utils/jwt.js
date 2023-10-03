import jwt from "jsonwebtoken";

const secretKey = "secret";
function generateToken(payload) {
  const generatedToken = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return generatedToken;
}

function verifyToken(generatedToken) {
  jwt.verify(generatedToken, secretKey);
}
