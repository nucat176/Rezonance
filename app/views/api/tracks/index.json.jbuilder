@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :track_url, :cover_url
  end
end
