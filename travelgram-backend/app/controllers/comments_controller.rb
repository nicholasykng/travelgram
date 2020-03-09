class CommentsController < ApplicationController
    def show
        comment = Comment.find(params[:id])
        render json: comment
    end


end
