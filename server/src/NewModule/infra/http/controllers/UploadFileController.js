class UploadFileController {
  constructor({ uploadFileUseCase }) {
    this.uploadFileUseCase = uploadFileUseCase;
  }

  uploadTmp = async (req, res, next) => {
    try {
      const params = {
        userId: req.user.id,
        file: req.file,
      };

      const result = await this.uploadFileUseCase.execute(params);
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

module.exports = { UploadFileController };
