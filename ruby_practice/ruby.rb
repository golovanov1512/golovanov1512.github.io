class PasswordGen
  def initialize(count_symbol)
    @count_symbol = count_symbol
    @vowel = %w(a e i y o u)
    @consonant = %w(q w r t p s d f g h j k l m n b v c x z)
  end

  def vowel_or_consonant(index)
    if index.even?
      to_large_letter(@vowel[rand(@vowel.size)], index)
    else
      @consonant[rand(@consonant.size)]
    end
  end

  def generate
    password = ""
    @count_symbol.times{|index| password << vowel_or_consonant(index) }
    password
  end

  def to_large_letter(letter, index)
    index > 5 ? letter.upcase : letter
  end
end

p 'Enter password length'
a =  PasswordGen.new(gets.chomp.to_i)
p "Your password : #{ a.generate }"