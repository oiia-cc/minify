const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const configApp = require('../../config/index');
const userService = require('../../services/user/userService');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({ message: "Bad request" });
        }
        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const match = await bcrypt.compare(req.body?.password, user.passwordHash)
        if (!match) {
            return res.status(401).json({ message: "Incorrect credentials" });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role,
                handle: user.handle
            },
            configApp.app.jwtSecret, // secret
            { expiresIn: configApp.app.jwtLifetime } // optional
        );

        return res.status(200).json({
            access_token: token,
            refresh_token: null,
            user: {
                id: user.id,
                email: user.email,
                handle: user.handle,
                role: user.role
            }
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { login };