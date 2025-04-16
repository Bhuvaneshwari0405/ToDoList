const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-token";

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).send("Access denied.");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).send("Invalid token.");
  }
}

module.exports = authenticateToken;
