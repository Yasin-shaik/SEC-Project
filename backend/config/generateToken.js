const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "x6cd2SlbbQawdA/ZYRVeH573LNI27wTFSEvdripGfPo=", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
