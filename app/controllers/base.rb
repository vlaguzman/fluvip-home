Fluvipp::App.controllers :base, map: '/' do

  get :index do
    render "base/home"
  end

  get :advertisers do
    render "base/advertirser"
  end

  get :influenciators do
    render "base/influenciators"
  end

  get :aboutus do 
    render "base/aboutus"
  end

  get :learn do
    render "base/learn"
  end

  get :legal do
    @navegation = "slide"
    render "base/legal"
  end

  get :locale, with: :locale do
    session[:locale] = params[:locale]
    redirect back
  end


end
