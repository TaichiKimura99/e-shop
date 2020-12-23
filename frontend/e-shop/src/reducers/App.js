const initialState = {

}

function itemReducer(state = initialState,action){

    switch(action.type){
        case 'FETCH_TASKS':
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
