class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :description
      t.string :picture
      t.belongs_to :user
      t.timestamps
    end
  end
end
