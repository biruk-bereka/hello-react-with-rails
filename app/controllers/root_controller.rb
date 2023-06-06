class RootController < ApplicationController
  def index
    random_greeting = Message.find(rand(1..5))
    respond_to do |format|
        format.html { render :index }
        format.json { render json: { greeting: random_greeting } }
    end
  end
end
