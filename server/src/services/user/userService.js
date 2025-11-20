const prisma = require('../../database');
const findUserByEmail = async (email) => {
    return await prisma.user.findFirst({ where: { email } });
}

module.exports = {
    findUserByEmail
}