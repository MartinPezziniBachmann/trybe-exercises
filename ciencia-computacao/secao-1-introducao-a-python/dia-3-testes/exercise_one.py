def fizzbuzz_list(length):
    mutaded_list = []
    for number in range(1, length + 1):
        if number % 3 == 0 and number % 5 == 0:
            mutaded_list.append("FizzBuzz")
        elif number % 3 == 0:
            mutaded_list.append("Fizz")
        elif number % 5 == 0:
            mutaded_list.append("Buzz")
        else:
            mutaded_list.append(number)
    return mutaded_list
