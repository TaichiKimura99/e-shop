class ItemsController < ApplicationController
  def index
    if params[:name].blank?
      @items = Item.all
      render json: @items
      
    else
      #like検索する
      #モデル名.where('カラム名 like ?','検索したい文字列')
      key = params[:name].to_s
      #, "%#{search}%"]
      @items = Item.where('name like ?',"%#{key}%")
      render json: @items
    end 
  end

end
