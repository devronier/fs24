class BadRequestError extends Error {
  constructor(message) {
    super(message);

    this.type = "Bad Request";
    this.code = 400;
  }
}

module.exports = BadRequestError;
