dummy_array = "Do you see any Teletubbies in here?".split('')

user_input = ["D", "o", " ", "y", "o", "u", " ", "x", "s", "e", "e", " ", "a", "n", "y", " ", "T", "e", "l", "e", "t", "u", "b", "b", "i", "e", "s", " ", "i", "n", " ", "h", "e", "r", "e", "?", "y"]

p dummy_array == user_input

truthiness = true

dummy_array.each_with_index do |letter, index|
  if letter == user_input[index] 
    truthiness = true
  else
    user_input.delete_at(index)
    truthiness = false
  end
  truthiness = false if user_input.length > dummy_array.length
end



           