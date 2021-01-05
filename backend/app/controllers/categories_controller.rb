class CategoriesController < ApplicationController
    def index
        #配列でカテゴリリストを取得
        @categories = Category.all.to_json
        #jsonというシンボルにカテゴリの配列を設定して、renderメソッドで描画する。
        render json: @categories
    end
end
