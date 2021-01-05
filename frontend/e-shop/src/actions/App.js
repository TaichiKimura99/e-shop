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

export const inputSearchCategory = (searchCategory)=>({
    type: 'INPUT_SEARCH_CATEGORY',
    payload:{
        searchCategory
    }
})

export const searchClick = (items)=>({
    type: 'SEARCH_CLICK',
    payload:{
        items
    }
})

export const fetchCategory = (categories)=>({
    type: 'FETCH_CATEGORY',
    payload:{
        categories
    }
})

// export const fetchTasks = (tasks) => ({
//     type: 'FETCH_TASKS',
//     payload:{
//       tasks
//     }
//   });