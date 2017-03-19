module Api
  module V1
    class GamesController < BaseController
      before_action :set_game, only: [:update]
      before_action :build_game, only: [:create]

      def create
        @game.token_col = params[:token_col]
        if @game.valid? && @game.process_move
          render json: @game  
        else
          flash[:error] = @game.errors.full_messages.join(", ")
          render json: @game
        end
      end
    end

    def update
      if @game.valid? && @game.process_move
        render json: @game  
      else
        render json: @game
        flash[:error] = @game.errors.full_messages.join(", ")
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