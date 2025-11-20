const prisma = require('./index')
const bcrypt = require('bcryptjs')

const createUser = async ({ email, name, handle, role }) => {
    return prisma.user.upsert({
        where: { email },
        update: {
            email,
            name,
            handle,
            role,
            passwordHash: bcrypt.hashSync("123456", 10)
        },
        create: {
            email,
            name,
            handle,
            role,
            passwordHash: bcrypt.hashSync("123456", 10)
        }
    })
}

const main = async () => {
    try {
        const admin = await createUser({
            email: "admin@gmail.com",
            name: 'james hammer',
            handle: 'admin',
            role: 'admin',
        })
        const user = await createUser({
            email: 'huu3675@gmail.com',
            name: 'huu ha quoc',
            handle: 'user1',
            role: 'user',
        })
        console.log(">>>seed: ", admin, user);

    } catch (e) {
        console.log(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main()