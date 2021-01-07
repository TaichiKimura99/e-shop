import Search from './../components/Search'
import {connect} from 'react-redux'
import {inputSearchKey,fetchItems,fetchCategory,inputSearchCategory} from './../actions/App'

//componentの描画に使う
function mapStateToProps({appReducer}){
    //　searchKey: = searchKey:？？？
    //{searchKey,categories,searchCategory}
    return {
        searchKey: appReducer.searchKey,
        categories: appReducer.categories,
        searchCategory: appReducer.searchCategory
    }
}

function mapDispatchToProps(dispatch){
    return{
        inputSearchKey(text){
            dispatch(inputSearchKey(text));
        },
        inputSearchCategory(text){
            dispatch(inputSearchCategory(text));
        },

        async searchClick(searchText,categoryText) {
            //リクエストを送る
            //ifをそのまま使うと、responseが参照できなくなるので、アロー関数にする。
            const response = await fetch("http://localhost:13000/items/?name=" + searchText + "&category=" + categoryText )

            //jsonをオブジェクトに書き換える。と思いきや、fetchが非同期処理
            //fetchが終わるまで待ってくれない。そのためundefindでエラーになる。
            //そこで、頭に、asyncをつける
            //json()も非同期処理なので、awaitをつける。アウェイと
            const items = await response.json();
            //dispatch(searchClick(text));
            dispatch(fetchItems(items));
        },
        async fetchCategory(){
            //リクエストを送る
            const response = await fetch("http://localhost:13000/categories");
            //jsonをオブジェクトに書き換える。と思いきや、fetchが非同期処理
            //fetchが終わるまで待ってくれない。そのためundefindでエラーになる。
            //そこで、頭に、asyncをつける
            //json()も非同期処理なので、awaitをつける。アウェイと
            const categories = await response.json();
            dispatch(fetchCategory(categories));
        }
    
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Search)