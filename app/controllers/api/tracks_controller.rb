class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def update
    @track = Track.find(params[:id])
    if @track.update_attributes(track_params)
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render "api/tracks/show", status: 200;
  end

  private

  def track_params
    params.require(:track).permit(:title, :track_url, :cover_url, :artist_id, :album_id)
  end
end
