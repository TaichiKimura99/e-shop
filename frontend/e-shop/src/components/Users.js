import React from "react";

class Users extends React.Component{
    async componentDidMount(){
        await this.props.fetchUsers();
    }


    render(){
        const {users} = this.props;
        return(
            <div>
                <label>名前</label>
                <input type="text" value = {users[0].name}/>
                <br/>
                <label>誕生日</label>
                <input type="text" value = {users[0].birthday}/>
                <br/>
                <label>性別</label>
                <select value = {users[0].gender}>
                    <option value = "0">女性</option>
                    <option value = "1">男性</option>
                </select>
                <br/>
                <label>チャイルドモード</label>
                <input type="checkbox" />
                <button>送信</button>
            </div>
        )
    }
}
export default Users;