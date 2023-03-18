import subprocess

cpu_information = subprocess.check_output("lscpu").decode("UTF-8").split("\n")
ram_information = subprocess.check_output("free").decode("UTF-8").split("\n")

for info in ram_information:
    print(info)
print(cpu_information[13])
print(cpu_information[7])
print(cpu_information[15])
print(cpu_information[20])
print(cpu_information[21])
print(cpu_information[22])
print(cpu_information[23])
