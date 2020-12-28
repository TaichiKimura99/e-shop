const initialState = {
    items:[
            {
                name:'',
                price:'',
                id:0,
                category:{
                    name:''
                }
            }
        ],
    searchKey:''
}

function appReducer(state = initialState,action){

    switch(action.type){
        case 'FETCH_ITEMS':
            return {
              ...state,
              items: action.payload.items
            };
        case 'INPUT_SEARCH_TEXT':
            return{
                ...state,
                searchKey: action.payload.searchKey
            };
        case 'SEARCH_CLICK':
                return{
                    ...state,
                    items: action.payload.items,
                    searchKey: action.payload.searchKey
                };
        default:
            return {
                ...state
            }
    }
}

export default appReducer;
