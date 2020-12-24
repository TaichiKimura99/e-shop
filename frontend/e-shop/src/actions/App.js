export const fetchItems = (items) => ({
    type: 'FETCH_ITEMS',
    payload:{
        items
    }
});

export const inputSearchKey = (searchKey)=>({
    type: 'INPUT_SEARCH_TEXT',
    payload:{
        searchKey
    }
})

export const searchClick = (items)=>({
    type: 'SEARCH_CLICK',
    payload:{
        items
    }
})


// export const fetchTasks = (tasks) => ({
//     type: 'FETCH_TASKS',
//     payload:{
//       tasks
//     }
//   });