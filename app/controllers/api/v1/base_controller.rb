module Api
  module V1
    class BaseController < ApplicationController

      before_action :set_format

      private

      def set_format
        request.format = :json
      end

    end
  end
end