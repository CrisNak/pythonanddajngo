def myFunc(param1='default'):
    """
    THIS IS THE DOCSTRING
    """
    print('my first function {}'.format(param1))

    myFunc()

def addNum(num1,num2):
    if type(num1)==Type(num2)==type(10):
        return num1+num2
    else:
        return "Sorry, i need integers"
result = addNum("2","3")
print(result)
#reconhece que sao strings


myList = [1,2,3,4,5,6,7,8]

def evenBoll(num):
    return num%2 == 0
evens = filter(evenBoll, myList) #filtra o evenBoll dentro da lista
print(list(evens))
#[2,4,6,8]

evens = filter(lambda num:num%2 == 0, myList)
print(list(evens))
#[2,4,6,8]
