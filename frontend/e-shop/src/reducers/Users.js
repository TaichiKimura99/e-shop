const initialState = {
    users:[
            {
                name:'',
                birthday:'',
                gender:0,
                token:'',
                admin:'',
                childmode:''
            }
        ],
}

//初期値を返す。
function usersReducer(state = initialState,action){
    switch(action.type){
        case 'FETCH_USERS':
            // stateとusersを返す。
            return{
                ...state,
                users:action.payload.users
            }
        default:
            return {
                ...state
            }
    }
}
export default usersReducer;
