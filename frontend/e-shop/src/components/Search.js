import React from 'react'


class Search extends React.Component{
    async componentDidMount(){
        //データをrailsサーバーから取得して、Storeに代入したい。
        //コンテナでfetchを宣言したので、それを呼び出す
        //rubyからカテゴリデータをゲットして
        await this.props.fetchCategory();
      }

    render(){
        // 入力時にキーワードが
        const {
            inputSearchKey,
            searchClick,
            searchKey,
            categories,
            inputSearchCategory,
            searchCategory
        }=this.props;

        // const selectBoxYouso =  (
        //             categories.map((category)=>{
        //                 <option value = {category.name}>{category.name}</option>
        //                 }
        //             )                
        //     );
        // const selectBox = selectBoxYouso.join;
        const selectBox = categories.map((category) => {
            return(
            <option value = {category.name}>
                {category.name}
            </option>
            )
            
        });

//         <option value="">選択してください</option>
// <option value="ご質問・お問い合わせ">ご質問・お問い合わせ</option>
// <option value="リンクについて">リンクについて</option>
        return(
            <div>
                <select value = {searchCategory} onChange={(e)=>(inputSearchCategory(e.target.value))}>
                    <option value = "全て">全て</option>
                    {selectBox}
                </select>
                <input type="text" id = "SearchText" value={searchKey} onChange={(e)=>(inputSearchKey(e.target.value))}/>
                <input type="button" value = "検索" onClick ={()=>(searchClick(searchKey,searchCategory))}/>
            </div>

        )
    }
}

export default Search