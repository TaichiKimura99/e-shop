const initialState = {
    items:[
            {
                name:'',
                price:''
            }
        ]
}

function appReducer(state = initialState,action){

    switch(action.type){
        case 'FETCH_ITEMS':
            return {
              ...state,
              items: action.payload.items
            }
        default:
            return {
                ...state
            }
    }
        


}

export default appReducer;
