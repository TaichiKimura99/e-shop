import React from 'react'
import Search from './../containers/Search'

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
        await this.props.fetchItems();
      }
      render(){
        
        const{
          items
        }=this.props;
        return (
          <div>
            <Search />
            <table>          
                <thead>
                      <tr>
                          <th>カテゴリ</th>
                          <th>商品名</th>
                          <th>価格</th>
                      </tr>
                  </thead>

                  <tbody>
              {
                //tasksの一つ目に中身、２つ目に配列インデックスを入れる。
                items.map(function(item,i){
                  return(
                      <tr key={item.id}>
                          <td>{item.category.name}</td>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                      </tr>
                  );
                })
              }
              </tbody>
              
          </table>
        </div>
      );
    }
    // t.string "name"
    // t.integer "price"
}

export default App;
