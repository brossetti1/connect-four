module Api
  module V1
    class GamesController < BaseController
      before_action :set_game, only: [:update]
      before_action :build_game, only: [:create]

      def create
        if @game.save
          render json: @game, status: :created
        else
          render json: { errors: @game.errors }, status: :unprocessable_entity
        end
      end

      def update
        if @game.valid? && @game.process_move
          render json: @game, status: :created
        else
          render json: { errors: @game.errors }, status: :unprocessable_entity
        end
      end

      private

      def build_game
        @game = Game.new(player_one_turn: first_pick)
      end

      def set_game
        @game = Game.find(params[:id]).tap {|game| game.token_col = params[:token_col]}
      end

      def first_pick
        params[:player_one_turn] || true
      end
    end
  end
end