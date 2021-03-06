import AppAllResult from './../components/AppAllResult'
import {connect} from 'react-redux'
import {fetchItems} from './../actions/App'

//componentの描画に使う
function mapStateToProps({appReducer}){
    
    return {
        items:appReducer.items
    }

}
//actionを送るのに使う。
//つまり、コンポーネントから、dispatchしたアクションを送る
function mapDispatchToProps(dispatch){
    return{

        async fetchItems(){
            //リクエストを送る
            const response = await fetch("http://localhost:13000/items");
            //jsonをオブジェクトに書き換える。と思いきや、fetchが非同期処理
            //fetchが終わるまで待ってくれない。そのためundefindでエラーになる。
            //そこで、頭に、asyncをつける
            //json()も非同期処理なので、awaitをつける。アウェイと
            const items = await response.json();
            dispatch(fetchItems(items));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppAllResult)