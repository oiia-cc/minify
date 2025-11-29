const prisma = require('../../database');
const findUserByEmail = (email) => {
    return prisma.user.findFirst({ where: { email } });
}

module.exports = {
    findUserByEmail
}