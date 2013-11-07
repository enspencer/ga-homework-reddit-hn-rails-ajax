json.array!(@posts) do |post|
  json.extract! post, :title, :url, :body, :upvotes, :downvotes
  json.url post_url(post, format: :json)
end
