import React from 'react'

class Search extends React.Component{
    render(){
        // 入力時にキーワードが
        const {
            inputSearchKey,
            searchClick,
            searchKey
        }=this.props;
        return(
            <div>
                <input type="text" id = "SearchText" value={searchKey} onChange={(e)=>(inputSearchKey(e.target.value))}/>
                <input type="button" value = "検索" onClick ={()=>(searchClick(searchKey))}/>
            </div>

        )
    }
}

export default Search