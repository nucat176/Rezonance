class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      render :show
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def show
    @artist = Artist.find(params[:id])
  end

  def update
    @artist = Artist.find(params[:id])
    if @artist.update_attributes(artist_params)
      render "api/artists/#{@artist.id}"
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def destroy
    @artist = Artist.find(params[:id])
  end

  private

  def artist_params
    params.require(:artists).permit(:name)
  end

end
