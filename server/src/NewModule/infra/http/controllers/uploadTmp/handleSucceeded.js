const handleSucceeded = async (context, container) => {
  return {
    status: 201,
    success: true,
    context,
    response: {
      message: 'File uploaded to [tmp] successfully!',
      fileId: context.fileId,
      versionId: context.versionId,
    },
  };
};

module.exports = handleSucceeded;
