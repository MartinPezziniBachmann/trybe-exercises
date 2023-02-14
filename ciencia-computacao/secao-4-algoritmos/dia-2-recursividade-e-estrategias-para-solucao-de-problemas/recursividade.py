def sum_range(number):
    if number == 0:
        return 0
    else:
        return number + sum_range(number - 1)
