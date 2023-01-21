file = open("arquivo.txt", mode="w")

file.write("Marcos 10\n")
file.write("Felipe 4\n")
file.write("José 6\n")
file.write("Ana 10\n")
file.write("Maria 9\n")
file.write("Miguel 5\n")

file.close()

recuStudents = []
with open("arquivo.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
