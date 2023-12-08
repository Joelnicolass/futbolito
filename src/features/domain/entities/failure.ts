interface FailureProps {
  name?: string;
  message: string;
  statusCode?: number;
  data?: any;
}

export abstract class Failure {
  name?: string;
  message: string;
  statusCode?: number;
  data?: any;

  constructor({message, statusCode, name, data}: FailureProps) {
    this.name = name || 'Failure';
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}

class NetworkFailure extends Failure {
  constructor({message, statusCode, name, data}: FailureProps) {
    super({message, statusCode, name, data});
  }
}

class UnexpectedFailure extends Failure {
  constructor({message, statusCode, name, data}: FailureProps) {
    super({message, statusCode, name, data});
  }
}

export class FailureFactory {
  static network(props: FailureProps) {
    return new NetworkFailure(props);
  }

  static unexpected(props: FailureProps) {
    return new UnexpectedFailure(props);
  }
}
