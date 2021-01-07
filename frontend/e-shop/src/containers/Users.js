import {connect} from 'react-redux'
import Users from '../components/Users'
import {fetchUsers} from '../actions/Users'

//stateの内容を受け取る
function mapStateToProps({usersReducer}){
    //オブジェクトを受け取ってオブジェクトを返す
    //中身は、users配列型
    return{
        users:usersReducer.users
    }
}

function mapDispatchToProps(dispatch){
    return{
        async fetchUsers(){
            //ユーザデータの読み込み
            const response = await fetch('http://localhost:13000/users');

            const users = await response.json();
            //actionへ投げる、
            dispatch(fetchUsers(users));
        },
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);