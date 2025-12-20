class ListFile {
  constructor({ fileRepo }) {
    this.fileRepo = fileRepo;
  }

  async execute({ groupBy, sortBy, orderBy, page, limit, search, userId }) {
    const skip = (page - 1) * limit;

    const [items, total] = await this.fileRepo.listOfUser({
      userId,
      search,
      sortBy,
      groupBy,
      skip,
      limit,
      orderBy,
    });

    const resultObj = {
      success: true,
      data: items,
      meta: {
        page,
        total,
        limit,
        skip,
        hasNext: skip + items.length < total,
      },
    };

    console.log('---------->>>', resultObj);

    return resultObj;
  }
}

module.exports = ListFile;
