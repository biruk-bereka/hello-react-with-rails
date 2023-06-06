class GreetingsController < ApplicationController
  def index
    random_greeting = Message.find(rand(1..5))
    render json: { greeting: random_greeting.greeting }
  end
end
