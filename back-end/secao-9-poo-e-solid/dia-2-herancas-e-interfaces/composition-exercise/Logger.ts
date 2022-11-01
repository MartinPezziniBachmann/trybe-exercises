interface Logger {
  log(param: string): void;
}


class ConsoleLogger implements Logger {
  log(param: string) {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string) {
    console.log(param + '2');
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  logger: Logger;

  super(loggerPar: Logger) {
    this.logger = loggerPar ? loggerPar : new ConsoleLogger();
  }

  save(key: string, value: string) {
    this.logger.log(key);
    this.logger.log(value);
  }
}