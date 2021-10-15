class CustomError extends Error {
  public constructor(
    public message: string,
    public statusCode: string,
    public statusDescription: string
  ) {
    super(statusDescription)
  }
}

export default CustomError
