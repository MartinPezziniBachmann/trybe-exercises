from abc import ABC, abstractmethod


class System(ABC):
    @abstractmethod
    def __repr__(self):
        pass


class SupportSystem(System):
    def __repr__(self):
        return "Suporte"


class SalesSystem(System):
    def __repr__(self):
        return "Vendas"


class FinanceSystem(System):
    def __repr__(self):
        return "Financeiro"


class Account(ABC):
    def __init__(self):
        self.systems = []
        self.create_account()

    @abstractmethod
    def create_account():
        pass

    def show_access(self):
        print(self.systems)

    def add_system(self, system):
        self.systems.append(system)


class SupportAccount(Account):
    def create_account(self):
        self.add_system(SupportSystem())


class SalesAccount(Account):
    def create_account(self):
        self.add_system(SupportSystem())
        self.add_system(SalesSystem())


class ManagerAccount(Account):
    def create_account(self):
        self.add_system(SupportSystem())
        self.add_system(SalesSystem())
        self.add_system(FinanceSystem())


if __name__ == "__main__":
    support_account = SupportAccount()
    support_account.show_access()

    manager_account = ManagerAccount()
    manager_account.show_access()
