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

  after_initialize :initialize_defaults, if: :new_record?

  validates :token_col, presence: true, unless: :new_record?
  validate :validate_pick_exists!

  def process_move
    place_token
    change_player
    self.save
  end

  def place_token
    column[pick] = token
  end

  def pick
    column.index(0)
  end

  def token_column_index_nil?
    pick.nil?
  end

  def column
    self.board[typecasted_token_col - 1]
  end

  def token
    player_one_turn ? 1 : 2
  end

  def change_player
    player_one_turn? ? self.player_one_turn = false : self.player_one_turn = true
  end

  private

  # token_col is coming from params - string
  # therefore accessing token_col should be called from this method
  # this ensures validation process while also returning the index as an integer
  def typecasted_token_col
    token_col.to_i
  end

  def validate_pick_exists!
    if token_column_index_nil?
      errors.add(:base, "column #{token_col} has no picks left, choose another column please.")
    end
  end

  # DEFAULT BOARD
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]
  # [0,0,0,0,0,0,0]

  def initialize_defaults
    self.board = 7.times.map {[0,0,0,0,0,0,0]}
  end
end
