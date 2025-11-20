const { info } = require("../../utils/logger");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const configApp = require('../../config/index');
const userService = require('../../services/user/userService');

const login = async (req, res, next) => {
    try {
        const user = await userService.findUserByEmail(req.body?.email);
        console.log(">>> r:", req.body);

        console.log(">>>: u", user);
        console.log(configApp);

        if (!user) {
            return res.status(404).json({ message: "Cannot find this email" });
        }

        if (await bcrypt.compare(req.body?.password, user.passwordHash)) {
            const token = jwt.sign(
                {
                    email: user.email,
                    role: user.role,
                    handle: user.handle
                },
                configApp.app.jwtSecret, // secret
                { expiresIn: configApp.app.jwtLifetime } // optional
            );

            return res.status(200).json({
                acces_token: token,
                refresh_token: null,
                user: {
                    id: user.id,
                    email: user.email,
                    handle: user.handle,
                    role: user.role
                }
            });
        }

        return res.status(401).json({ message: "Incorrect credentials" });
    } catch (error) {
        next(error);
    }
};

module.exports = { login };