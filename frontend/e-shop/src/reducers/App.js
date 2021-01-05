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
    searchKey:'',
    categories: [{
        name: ''
    }],
    searchCategory: '全て'
}

function appReducer(state = initialState,action){

    switch(action.type){
        case 'FETCH_ITEMS':
            return {
              ...state,
              items: action.payload.items
            };
        case 'FETCH_CATEGORY':
            return {
                ...state,
                categories: action.payload.categories
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
        case 'INPUT_SEARCH_CATEGORY':
            return{
                ...state,
                searchCategory: action.payload.searchCategory
            };
        
        default:
            return {
                ...state
            }
    }
}

export default appReducer;
