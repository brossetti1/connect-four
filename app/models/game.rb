# == Schema Information
#
# Table name: games
#
#  id              :integer          not null, primary key
#  board           :text
#  player_one_turn :boolean
#  finsihed        :boolean          default("false")
#  winner          :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#



class Game < ApplicationRecord
  serialize :board, Array

  attr_accessor :token_col

  after_initialize :initialize_defaults, :if => :new_record?

  def place_token
    column[pick] = token
  end

  def pick
    column.index(0)
  end

  def column
    self.board[token_col - 1]
  end

  def token
    player_one_turn ? 1 : 2
  end

  private

  def initialize_defaults
    self.board = 7.times.map {[0,0,0,0,0,0]}
  end
end
