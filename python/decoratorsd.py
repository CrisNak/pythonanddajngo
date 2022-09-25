s = 'GLOBAL VARIABLE!'

def func():
    mylocal = 10
    print(locals())
    #{'mylocal' :10}
    print(globals()['s'])
    #GLOBAL VARIABLE!

func()


def hello (name='Jose'):
    return 'hello' +name

print(hello())
#hello Jose

mynewgreet = hello

print(mynewgreet())
#hello Jose


def hello (name='Jose'):
    print("hello function")
    def greet(): 
        return "this string is inside greet()"
    def welcome():
        return "this string is inside a function"
    
    if name =='Jose':
        return greet
    else: 
        return welcome

x = hello()
print(x())
#hello function
#this string is inside greet() -- pq a função retona greet



#def hello (name='Jose'):
    #print("hello function")
    #def welcome():
        #return "this string is inside a function"

#welcome() #dá erro, pq a funcção só funciona dentro da função hello



def hello():
    return 'Hi Jose!'

def other(func):
    print('Hello')
    print(func)

other(hello)
#<function hello as NUMBER>

other(hello())
#Hello
#Hi Jose!


def new_decorator(func):

    def wrap_func():
        print('Code here before executing func')
        func()
        print('Func() has been called')
    
    return wrap_func

def func_needs_decorator():
    print('This function is in need of a decorator')

func_needs_decorator()
#This function is in need of a decorator

func_needs_decorator = new_decorator(func_needs_decorator)
func_needs_decorator()
#Code here before executing func
#This function is in need of a decorator
#Func() has been called

@new_decorator
def func_needs_decorator():
    print('This function is in need of a decorator')
# = func_needs_decorator = new_decorator(func_needs_decorator)
func_needs_decorator()
