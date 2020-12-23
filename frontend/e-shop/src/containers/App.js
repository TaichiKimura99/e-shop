function mapStateToProps(item){
    return item

}

function mapDispatchToProps(dispatch){
    async fetchTasks(){
        //リクエストを送る
        const response = await fetch("http://localhost:13000/items");
        //jsonをオブジェクトに書き換える。と思いきや、fetchが非同期処理
        //fetchが終わるまで待ってくれない。そのためundefindでエラーになる。
        //そこで、頭に、asyncをつける
        //json()も非同期処理なので、awaitをつける。アウェイと
        const items = await response.json();
        dispatch(fetchTasks(items));
    }
}