
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
    let token;

    // ✅ Check if the Authorization header exists and starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // ✅ Extract token string from header
            token = req.headers.authorization.split(" ")[1];

            // ✅ Decode and verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // ✅ Attach user to request object
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (err) {
            console.error("JWT verification error:", err.message);
            res.status(401).json({ message: "Not authorized, token failed" });
        }
    } else {
        res.status(401).json({ message: "Not authorized, no token" });
    }
};
