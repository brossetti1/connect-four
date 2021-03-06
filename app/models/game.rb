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
  validates :token_col, presence: true

  def place_token
    column[pick] = token
  end

  def pick
    column.index(0)
  end

  def colunn_index_exists_for_token?
    !pick.nil?
  end

  def column
    self.board[token_col - 1]
  end

  def token
    player_one_turn ? 1 : 2
  end

  def change_player
    player_one_turn? ? self.player_one_turn = false : self.player_one_turn = true
  end

  private

  # DEFAULT BOARD
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]

  def initialize_defaults
    self.board = 6.times.map {[0,0,0,0,0,0,0]}
  end
end
