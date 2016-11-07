class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])
    if @album.update_attributes(album_params)
      render "api/albums/#{@album.id}"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    render "api/albums"
  end

  private

  def album_params
    params.require(:albums).permit(:title, :genre, :artist_id, :cover_url)
  end

end
