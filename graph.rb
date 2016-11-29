class Graph
  attr_accessor :nodes

  def initialize
    @nodes = []
  end

  class Node
    attr_accessor :value
    attr_accessor :children

    def initialize(value)
      @value = value
      @children = []
    end
  end
end

g = Graph.new

n1 = Graph::Node.new(1)
g.nodes << n1

n1.children << Graph::Node.new(2)
n1.children << Graph::Node.new(3)

p g
