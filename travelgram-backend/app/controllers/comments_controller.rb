class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments, except: [:created_at, :updated_at]
    end


end
