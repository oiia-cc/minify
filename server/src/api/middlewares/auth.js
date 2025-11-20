const jwt = require('jsonwebtoken');
const configApp = require('../../config/index');

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Missing Authorization header" })
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ message: "Invalid Authorization header" })
    }
    const token = parts[1];
    try {
        const decoded = jwt.verify(token, configApp.app.jwtSecret);
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(401).json({ message: "Invalid or expired token" })
    }
}


const PERMISSIONS = {
    FILE_READ: "FILE:READ",
    FILE_WRITE: "FILE:WRITE",
    FILE_DELETE: "FILE:DELETE",
    EVENT_READ: "EVENT:READ",
    FILE_MANAGE: "FILE:MANAGE",
    USER_MANAGE: "USER:MANAGE",
    USER_READ: "USER:READ",
    USER_WRITE: "USER:WRITE",
    USER_DELETE: "USER:DELETE"
}

const ROLE_PERMISSION = {
    admin: new Set(
        [
            PERMISSIONS.FILE_MANAGE,
            PERMISSIONS.USER_MANAGE,
            PERMISSIONS.EVENT_READ,
        ]
    ),
    user: new Set([
        PERMISSIONS.FILE_READ,
        PERMISSIONS.FILE_WRITE,
        PERMISSIONS.EVENT_READ
    ])
};

const authorize = (permission) => {
    return (req, res, next) => {
        const role = req.user?.role;
        const allowPermissions = ROLE_PERMISSION[role];

        if (!allowPermissions) {
            return res.status(403).json({ message: "You do not have permisson" })
        }

        const allowed = allowPermissions.has(permission);

        if (!allowed) {
            return res.status(403).json({ message: "You do not have permisson" })
        }

        next()
    }
}

module.exports = {
    authenticate,
    authorize,
    PERMISSIONS
}