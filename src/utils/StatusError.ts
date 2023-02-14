class StatusError extends Error {
  constructor(
    public status: number,
    // public type: string,
    public message: string,
  ) {
    super(message);
    this.status = status;
    // this.type = type;
  }
}

export default StatusError;
