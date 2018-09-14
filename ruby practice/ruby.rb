@vowel = %w(a e i y o u)
@consonant = %w(q w r t p s d f g h j k l m n b v c x z)
password = ""

def vowel_or_consonant(length_pass)
  if length_pass.even?
    @vowel[rand(@vowel.size)]
  else
    @consonant[rand(@consonant.size)]
  end
end

puts "Напишите длинну пароля"

length_pass = gets.chomp.to_i

length_pass.times { |number| password << vowel_or_consonant(number) }

p password
