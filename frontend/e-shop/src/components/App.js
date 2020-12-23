class App extends React.Component{
    //Storeから値を取り出すのは、Containerの役割なので不要
    //const{task,tasks}=store.getState();
     
    //store.dispatchで、Actionを発行する
      //アロー演算子を使うことでbindを使わないようにできる。
      
      //コンポーネントが読み込まれた直後に実行される。
      async componentDidMount(){
        //データをrailsサーバーから取得して、Storeに代入したい。
        //コンテナでfetchを宣言したので、それを呼び出す
        //引数はいらない、なぜなら、rubyからデータを取得するから
        await this.props.fetchTasks();
      }
      render(){
        const{
          items
        }=this.props;
        return (
          <table>
              <thead>
                    <tr>
                        <th>商品名</th>
                        <th>価格</th>
                    </tr>
                </thead>
            {
              //tasksの一つ目に中身、２つ目に配列インデックスを入れる。
              items.map(function(item,i){
                return(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{task.price}</td>
                    </tr>
                );
              })
            }
        </table>
      );
    }
    // t.string "name"
    // t.integer "price"
}
