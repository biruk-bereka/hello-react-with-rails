class GreetingsController < ApplicationController
  def index
    random_greeting = Message.all.sample
    render json: { greeting: random_greeting.greeting }
  end
end
