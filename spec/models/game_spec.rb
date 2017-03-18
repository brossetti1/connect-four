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

require 'rails_helper'

RSpec.describe Game, type: :model do
  
  describe "#initialize_defaults" do
    it{expect(Game.new.board).to eq(Boards::DefaultState)}
  end

end
