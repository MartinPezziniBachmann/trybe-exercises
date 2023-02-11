class Log:
    def dispara_log(self, message):
        return message


class LogError:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"\033[91mError:\033[0m {self.log.dispara_log(message)}"


class LogWarning:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"\033[93mWarning:\033[0m {self.log.dispara_log(message)}"


class LogSuccess:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"\033[92mSuccess:\033[0m {self.log.dispara_log(message)}"


if __name__ == "__main__":
    logger = Log()

    erro = LogError(logger)
    print(erro.dispara_log("O sistema está com erros"))

    warning = LogWarning(logger)
    print(warning.dispara_log("O sistema está lento"))

    success = LogSuccess(logger)
    print(success.dispara_log("O sistema está funcionando"))
