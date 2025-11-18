const prisma = require('../src/database');

async function main() {
    const users = await prisma.user.findMany();
    console.log(users);
}

main();
