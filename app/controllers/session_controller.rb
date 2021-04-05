class SessionController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]
  def new
  end

  def create
    user = User.find_by name: params[:session][:name].downcase
    if user && user.authenticate(params[:session][:password])
      #TODO save user infor into session
      flash[:success] = "Login success"
      log_in user
      redirect_to user
    else
      flash[:danger] = "Invalid email/password combination"
      render :new
    end
  end

  def destroy
    log_out
    flash[:success] = "You are logged out"
    redirect_to login_path
  end
  #GET current_user 
  def current_user
    @current_user ||= User.find_by id: session[:user_id]
  end

  # Check user has logged in before ? 
  def logged_in?
    current_user.present?
  end
end
