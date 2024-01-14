export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type:"load/users/start"})

        fetch("https://jsonplaceholder.typicode.com/users")
            .then( res => res.json())
            .then( data => {
                dispatch({
                    type: "load/users/success",
                    payload: data
                })
            })
    }
}


export const loadTodos = (id) => {
    return (dispatch) => {
        dispatch({type:"load/todos/start"})

        fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
            .then( res => res.json())
            .then( data => {
                dispatch({
                    type: "load/todos/success",
                    payload: data
                })
            })
    }
}