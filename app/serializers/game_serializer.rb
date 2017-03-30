class GameSerializer < ActiveModel::Serializer
  attribute  :player_one_turn, key: :playerOneTurn
  attributes :id, :board, :finsihed, :winner
end