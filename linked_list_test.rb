require 'test/unit'
require_relative 'linked_list'

class LinkedListTest < Test::Unit::TestCase
  def test_initialization
    node = LinkedList::Node.new(1)
    assert_equal 1, node.value
  end
end
