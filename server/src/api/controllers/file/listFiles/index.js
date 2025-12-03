


const listFiles = async (req, res, next) => {
    console.log("listFiles: pholder");
    return res.status(200).json({
        success: true,
        data: []
    })
    // const userId = req.user.id;
    // info("query: ", JSON.stringify(req.query));

    // const {
    //     groupBy = "none",
    //     sortBy = "updatedAt",
    //     orderBy = "desc",
    //     page = "1",
    //     limit = "20",
    //     search = ""
    // } = req.query;

    // const skip = (page - 1) * limit;

    // const files = await fileService.listOfUser({
    //     userId,
    //     search: search,
    //     sortBy: sortBy,
    //     groupBy: groupBy,
    //     skip,
    //     limit,
    //     orderBy: orderBy
    // });
    // // info(files, "----")

    // return res.status(200).json({
    //     success: true,
    //     data: files
    // })
}

module.exports = listFiles;
