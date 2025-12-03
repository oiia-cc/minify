const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const configApp = require('../../config/index');
const userService = require('../../services/user/userService');
const auditLogService = require('../../services/auditLog/auditLogService');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            await auditLogService.createOne({
                actorType: "human",
                action: "user.login.failed",
                details: {
                    email: email,
                    reason: "incorrect credentials"
                }
            });
            return res.status(404).json({ message: "Bad request" });
        }
        const user = await userService.findUserByEmail(email);
        if (!user) {
            await auditLogService.createOne({
                actorType: "human",
                action: "user.login.failed",
                details: {
                    email: email,
                    reason: "user not exist"
                }
            });
            return res.status(404).json({ message: "User not found" });
        }
        const match = await bcrypt.compare(req.body?.password, user.passwordHash)
        if (!match) {
            await auditLogService.createOne({
                actorType: "human",
                action: "user.login.failed",
                details: {
                    email: email,
                    reason: "incorrect credentials"
                }
            });
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

        await auditLogService.createOne({
            actorType: "human",
            action: "user.login.succeeded",
            details: {
                email: email,
                role: user.role
            }
        });
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
        await auditLogService.createOne({
            actorType: "human",
            action: "user.login.failed",
            details: {
                email: email,
                reason: "exception",
                error: error
            }
        });
        next(error);
    }
};

module.exports = { login };