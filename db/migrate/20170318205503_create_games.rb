class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.text :board
      t.boolean :player_one_turn
      t.boolean :finsihed, default: false
      t.integer :winner

      t.timestamps
    end
  end
end
