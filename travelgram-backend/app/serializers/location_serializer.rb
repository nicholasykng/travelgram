class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :description, :picture, :user_id, :comment_id
  has_many :comments
  belongs_to :user
end
