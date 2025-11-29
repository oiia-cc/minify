const prisma = require('../../database');

const getUsers = async (req, res) => {
    const list = await prisma.user.findMany();
    return res.status(200).json({ users: list })
}

const router = require('express').Router();

router.get('/', getUsers);

module.exports = router;