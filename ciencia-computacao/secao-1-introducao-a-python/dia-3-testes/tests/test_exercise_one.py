from exercise_one import fizzbuzz_list


def test_fizzbuzz_list_when_divisible_by_three():
    assert fizzbuzz_list(3) == [1, 2, "Fizz"]


def test_fizzbuzz_list_when_divisible_by_five():
    assert fizzbuzz_list(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_fizzbuzz_list_when_divisible_by_three_and_five():
    assert fizzbuzz_list(15) == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]
