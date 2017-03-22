module Api
  module V1
    class BaseController < ApplicationController
      skip_before_action :verify_authenticity_token
      before_action :set_format

      private

      def set_format
        request.format = :json
      end

    end
  end
end