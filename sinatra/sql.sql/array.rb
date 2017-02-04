class Array
	def new_each
		index = 0
		while index < self.size
			puts "yield: #{yield}"
			puts "self: #{self}"
			puts "index #{index}"
			puts"self[index]: #{self[index]}"
			yield(self[index])
			index += 1
		end
		self
	end
end