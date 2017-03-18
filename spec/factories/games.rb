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
    player_one_turn true
    finsihed false
    winner 0

    trait :player_two_turn do
      player_one_turn false
    end

    trait :player_one_win do
      winner 1
    end

    trait :player_two_win do
      winner 2
    end
  end
end
