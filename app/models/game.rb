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

  attr_accessor :token_col, :token_row

  after_initialize :initialize_defaults, :if => :new_record?

  private

  def initialize_defaults
    self.board = 7.times.map {[0,0,0,0,0,0]}
  end
end
