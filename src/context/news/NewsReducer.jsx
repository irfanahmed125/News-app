const NewsReducer =(state,action)=>{

    switch(action.type)
    {
     case "GETNEWS":
        return{
        ...state,
        allNews :state.allNews = action.payload

        }
    }
}

export default NewsReducer