json.extract! @track, :id, :title, :track_url, :cover_url, :user_id

json.comments @track.comments.each do |comment|
  json.extract! comment, :id, :body, :user
end
