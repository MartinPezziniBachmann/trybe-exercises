def find_higher_number(number_list):
    size = len(number_list)
    return find_higher_recursive(number_list, size)


def find_higher_recursive(number_list, size):
    if size == 1:
        return number_list[0]
    else:
        higher_left = find_higher_recursive(number_list, size - 1)
        if higher_left > number_list[size - 1]:
            return higher_left
        else:
            return number_list[size - 1]
