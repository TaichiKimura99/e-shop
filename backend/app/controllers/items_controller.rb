class ItemsController < ApplicationController
  def index
    if params[:name].blank?
      @items = Item.joins(:category).to_json(include: :category)
      render json: @items
      
    elsif params[:category] == "全て"
      #like検索する
      #モデル名.where('カラム名 like ?','検索したい文字列')
      name = params[:name].to_s
      #, "%#{search}%"]
      @items = Item.joins(:category).where('items.name like ?',"%#{name}%").to_json(include: :category)
      render json: @items
    else
      #nameもcategoryも指定がある場合
      name = params[:name].to_s
      category_name = params[:category].to_s
      #, "%#{search}%"]
      @items = Item.joins(:category).where('items.name like ? and categories.name = ?',"%#{name}%",category_name).to_json(include: :category)
      #Item.joins(:category).where('items.name like ?',"%ruby%").and(Item.joins(:category).where('categories.name like ?',"%書籍%")).to_json(include: :category)
      #Item.joins(:category).where('items.name like ? and categories.name like ?',"%ruby%","書籍")
      render json: @items
    end 
  end

end
