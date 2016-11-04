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
      render "api/tracks/#{@track.id}"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render 'api/tracks'
  end

  private

  def track_params
    params.require(:tracks).permit(:title, :track_url, :cover_url)
  end
end