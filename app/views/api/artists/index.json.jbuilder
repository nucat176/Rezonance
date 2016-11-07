@artists.each do |artist|
  json.set! artist.id do
    jston.extract! artist, :id, :name
  end
end
