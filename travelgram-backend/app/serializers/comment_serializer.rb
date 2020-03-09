class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :location_id, :user_id
  belongs_to :user
  belongs_to :location
end
