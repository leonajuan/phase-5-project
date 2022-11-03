class MusicsController < ApplicationController
  
  def index
    musics = Music.all 
    render json: musics, status: :ok
  end

  def show
    music = Music.find_by(id: params[:id])
    if music
      render json: music, status: :ok
    else
    end
  end

  def create
    music = Music.create(music_params)
    if music.valid?
      render json: music, status: :created
    else
      render json: { errors: music.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def music_params
    params.permit(:song_title, :artist, :album, :album_cover)
  end

end
