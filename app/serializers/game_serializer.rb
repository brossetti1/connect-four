class GameSerializer < ActiveModel::Serializer
  attributes :id, :board, :player_one_turn, :finsihed, :winner
end