import random
import json
import csv


def vertical_print():
    name = input("Digite seu nome: ")
    for removed_letters in range(len(name)):
        for index in range(len(name) - removed_letters):
            print(name[index], end="")
        print()


vertical_print()

MAX_ATTEMPTS = 3


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


if __name__ == "__main__":
    with open("words.json") as file:
        words = json.load(file)
    secret_word, scrambled_word = draw_secret_word(words)
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)


def calculate_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(categories_count, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in categories_count.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    with open("books.json") as file:
        books = json.load(file)
    categories_count = calculate_books_by_categories(books)
    categories_percentage = calculate_percentage_by_category(
        categories_count, len(books)
    )
    print(categories_percentage)
    with open("categories_percentage.csv", "w", encoding="utf-8") as file:
        header = ["categoria", "porcentagem"]
        write_csv_report(file, header, categories_percentage)
