module LinkedList
  # singly linked
  class Node
    attr_accessor :next
    attr_accessor :value

    def initialize(value)
      @value = value
    end

    def append_to_tail(value)
      node = self
      while node.next
        node = node.next
      end

      node.next = Node.new(value)
    end
  end
end
