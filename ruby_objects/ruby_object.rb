
  
class Maths 
  attr_reader :current_val
  def initialize
    @current_val = 1 
  end 
  def add(num) 
    @current_val = @current_val + num
    return @current_val
  end 
  def subtract(num)
    @current_val = @current_val - num
    return @current_val
  end 
  def multiply(num)
    @current_val = @current_val * num
    return @current_val
  end 
  def divide(num)
    @current_val = @current_val / num 
    return @current_val
  end 
  def clear
    @current_val = 1 
  end 
  
end   

my_math = Maths.new 
p my_math.add(12)
p my_math.current_val
p my_math.multiply(10)
my_math.clear
p my_math.current_val







class Elevator
  attr_reader :floor 
  def initialize
    @floor = 1 
    
  end   
  def go_up
    @floor += 1 unless @floor >= 12
    cheery_greeting
  end 
  def go_down
    @floor -= 1 unless @floor <= 1 
    cheery_greeting
  end 
  def cheery_greeting
    p "Welcome to floor # #{@floor}"
    
  end   
  
end   

my_floor = Elevator.new 
my_floor.go_down
