class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
  has_many :locations
  has_many :comments
end
