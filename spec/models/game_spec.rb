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
  let!(:game) {build(:game, token_col: 1)}
  
  describe "#initialize_defaults" do
    it{expect(game.board).to eq(Boards::DefaultState)}
  end
  
  describe "#place_token" do
    Boards::ColPickExpectations.each do |column, pick|

      context "on player_one's turn" do
        let!(:game) { build(:game, token_col: 1) }

        before { game.board[0] = column }

        it "should place token 1 at the specified col at the next available position" do
          expect(game.column[pick]).to eq(0)
          game.place_token
          expect(game.column[pick]).to eq(1)
        end
      end

    end
  end

  describe "#token" do
    context "when player_one_turn is true" do
      it{expect(Game.new(player_one_turn: true).token).to eq(1)}
    end

    context "when player_one_turn is false" do
      it{expect(Game.new(player_one_turn: false).token).to eq(2)}
    end
  end

  describe "#change_player" do

    context "when its player_one's turn" do

      before do
        expect(game.player_one_turn?).to eq(true)
        game.change_player
      end

      it "should switch to player 2" do
        expect(game.player_one_turn?).to eq(false)
      end
    end
  end

  describe "colunn_index_exists_for_token?" do
    context "when the next index exists" do
      before do
        allow(game).to receive(:column) { [1,1,2,2,0,0,0] }
      end

      it{expect(game.colunn_index_exists_for_token?).to eq(true)}
    end

    context "when the next index does not exist" do

      before do
        allow(game).to receive(:column) { [1,1,2,2,1,1,2] }
      end

      it{expect(game.colunn_index_exists_for_token?).to eq(false)}
    end
  end
    
end
