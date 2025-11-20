const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        const token = req.body?.token;

        if (!token) {
            return res.status(401).json({ message: "Incorrect credentials" })
        }
        const decoded = jwt.verify(token, "abc");

        if (!decoded) {
            return res.status(401).json({ message: "Incorrect credentials" })
        }

        req.user = decoded;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    authenticate
}