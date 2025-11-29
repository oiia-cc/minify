const aboutMe = async (req, res, next) => {
    try {
        return res.status(200).json(req.user);
    } catch (err) {
        next(err);
    }
}


module.exports = {
    aboutMe
}