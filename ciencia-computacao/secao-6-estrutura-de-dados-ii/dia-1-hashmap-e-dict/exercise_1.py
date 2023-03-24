def calculate_possible_words_length(words, chars):
    total_len = 0

    alphabet = {}
    for char in chars:
        if char not in alphabet:
            alphabet[char] = 1
        else:
            alphabet[char] += 1
    print(f"Montamos o alfabeto: {alphabet}")

    for word in words:
        print(f"Analisando a palavra {word}")
        str_count = {}
        for char in word:
            if char not in alphabet:
                print(f"'{char}' não está no alfabeto. Desconsiderar palavra")
                break

            if char not in str_count:
                str_count[char] = 1
            else:
                str_count[char] += 1

                if str_count[char] > alphabet[char]:
                    print(
                        f"'{char}' ocorre com mais frequência do que no alfabeto. Desconsiderar"
                    )
                    break
        else:
            print(f"Considerar {word}")
            total_len += len(word)
    return total_len
