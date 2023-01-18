bool_var = True
print(type(bool_var))

int_var = 5
print(type(int_var))

float_var = 5.5
print(type(float_var))

str_var = "string"
print(type(str_var))

list_var = [1, 2, 3, "oi"]
print(type(list_var))

tuple_var = (1, "Valor")
print(type(tuple_var))

set_var = {1, 2, 3, "oi"}
print(type(set_var))

frozenset_var = frozenset([1, 2, 3, "oi"])
print(type(frozenset_var))

dict_var = {"nome": "João", "Cidade": "Belo Horizonte"}
print(type(dict_var))

range_var = list(range(1, 11))
print(range_var)

trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course.append("Ciência da Computação")
print(trybe_course)
trybe_course[0] = "Fundamentos"
print(trybe_course)

novo_set = set()
novo_set.add("Martin")
print(novo_set)

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
info["recorrente"] = "Sim"
print(info)
del info["origem"]
print(info)
