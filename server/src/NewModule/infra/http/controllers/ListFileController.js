class ListFileController {
  constructor({ listFilesUseCase }) {
    this.listFilesUseCase = listFilesUseCase;
  }

  list = async (req, res, next) => {
    try {
      const userId = req.user.id;

      const {
        groupBy = 'none',
        sortBy = 'updatedAt',
        orderBy = 'desc',
        page = '1',
        limit = '20',
        search = '',
      } = req.query;

      const queryPrams = {
        groupBy,
        sortBy,
        orderBy,
        page,
        limit,
        search,
        userId,
      };
      const result = await this.listFilesUseCase.execute(queryPrams);
      res.status(200).json(result);
    } catch (err) {
      if (err.message === 'BAD_REQUEST') {
        return res.status(400).json({ message: 'Bad request' });
      }
      if (err.message === 'USER_NOT_FOUND') {
        return res.status(404).json({ message: 'User not found' });
      }
      if (err.message === 'INVALID_CREDENTIALS') {
        return res.status(401).json({ message: 'Incorrect credentials' });
      }
      next(err);
    }
  };
}

module.exports = { ListFileController };
