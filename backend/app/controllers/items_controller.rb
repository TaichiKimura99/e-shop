class ItemsController < ApplicationController
  def index
    if params[:name].blank?
      @items = Item.joins(:category).to_json(include: :category)
      render json: @items
      
    else
      #like検索する
      #モデル名.where('カラム名 like ?','検索したい文字列')
      key = params[:name].to_s
      #, "%#{search}%"]
      @items = Item.joins(:category).where('items.name like ?',"%Ruby%").to_json(include: :category)
      render json: @items
    end 
  end

end
