import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret";

export const generateToken = (user) => {
    return jwt.sign(
      { PR_ID: user.PR_ID, PR_MOBILE_NO: user.PR_MOBILE_NO }, // Payload (User Data)
      JWT_SECRET,
      // Token expiration (7 days)
    );
  };

  export const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
  
    if (!token) {
      return res.status(401).json({ message: "Access denied, no token provided", success: false });
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded; // Attach user data to request
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid token", success: false });
    }
  };