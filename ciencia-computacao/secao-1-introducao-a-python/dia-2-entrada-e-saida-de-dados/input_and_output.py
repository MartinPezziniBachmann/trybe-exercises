def vertical_print():
    name = input("Digite seu nome: ")
    for letter in name:
        print(letter)


vertical_print()


def sum_numbers():
    nums = []
    input_num = 0
    while input_num != "":
        input_num = input("Insira o valor para somar: ")
        if input_num.isdigit():
            nums.append(input_num)
        else:
            print("Valor invalido")
    sum = 0
    for num in nums:
        sum += int(num)
    print(f"A soma dos valores é: {sum}")


sum_numbers()
