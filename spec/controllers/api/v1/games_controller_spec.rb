require 'rails_helper'

describe Api::V1::GamesController, type: :controller do
  let(:body) {JSON.parse(response.body)}

  describe "POST #create" do
    
    context "with a token_col specified" do
      let(:attributes) {body.dig('data', 'attributes')}

      context "when no player is specified to start the game" do

        before do
          post :create, params: {token_col: 1}
        end

        it "returns a new Game starting with Player One's move" do
          # the default with no param specified is to start the game with Player One's move first
          # when the response is returned, Player One's token is placed and the player is switched
          # this means that on the return response, it should NOT be Player One's turn.
          expect(attributes['player-one-turn']).to eq(false)
        end

        it{expect(body.dig('data','id')).to_not be_nil}
        it{expect(attributes['board'].first).to eq([1,0,0,0,0,0,0])}
        it{expect(response.status).to eq(201)}
      end

      context "when a player specified to start the game" do
        before do
          post :create, params: {token_col: 1, player_one_turn: false}
        end

        it "returns a new Game starting with Player Two's move" do
          # since player_one_turn is passed as false, Player Two makes the first move
          # when the response is returned, Player Two's token is placed and the player is switched
          # this means that on the return response, it should NOT be Player Two's turn.
          expect(attributes['player-one-turn']).to eq(true)
        end

        it{expect(body.dig('data','id')).to_not be_nil}
        it{expect(attributes['board'].first).to eq([2,0,0,0,0,0,0])}

        it{expect(response.status).to eq(201)}
      end
    end

    context "with no token_col specified" do

      before do
        post :create, params: {}
      end
      
      it "returns a validation error" do
        expect(body.dig("errors", "token_col")).to include("can't be blank")
      end

      it{expect(response.status).to eq(422)}
    end
  end


  describe "PUT #update" do

  end
end