try:
    f = open('simple.txt', 'w')#w-escreve um file , se colocar 'r', o output fica ERROR: COULD NOIT FIND OR READ DATA!
    f.write('Teste write to simple text!')
except IOError:
    print("ERROR: COLUD NOT FIND FILE OR READ DATA!")
else:
    print('SUCCESS!')
    f.close()

print("hello world") #com try, aponta o erro, mas resto do programa continua

try:
    f = open('simple.txt', 'r')
    f.write('Teste write to simple text!')
except IOError:
    print("ERROR: COLUD NOT FIND FILE OR READ DATA!")
finally:
    print("I ALWAYS WORK NO MATTER WHAT!") #finally continua o resto do programa mesmo com o erro

