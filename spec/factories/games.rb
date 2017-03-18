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

FactoryGirl.define do
  factory :game do
    board "MyText"
    player_one_turn true
    finsihed false
    winner nil

    trait :player_one_win do
      winner 1
    end

    trait :player_two_win do
      winner 2
    end
  end
end
