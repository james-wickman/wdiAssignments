
#1

def add_america(str) 
  my_var = str + " only in America"
  puts my_var
end   

add_america("something")




# 2 


my_array = [1, 2, 3, 4, 7, 5, 20, 2 ]

def biggest_num(numbers) 
  big_num = numbers[0] 
  numbers.each do |some_nums|
      if some_nums > big_num
        big_num = some_nums
      end  
  end
  return big_num
end   

biggest_num(my_array)


#3


make = [:toyota, :tesla]
model = ["Prius", "Model S"]

def combining_arr(key, other)
  my_obj = {}
  for i in 0..key.length - 1 
    my_obj[key[i]] = other[i]
  
  end 
  p my_obj
end  

combining_arr(make, model)



#4

for i in 0..100
  if i != 0 
    if i%3 == 0 && i%5 == 0 
      p "fizzBuzz"
    elsif i%5 == 0 
      p "Fizz"
    elsif i%3 == 0 
      p "Buzz"
    else 
      p i 
    end 
  else 
    p i
  end 
end





