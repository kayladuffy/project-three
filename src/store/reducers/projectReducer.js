const initState = {
    projects: [
        {id: '1', title: 'Example 1', content: 'Lorem Ipsum'},
        {id: '2', title: 'Example 2', content: 'Lorem Ipsum'},
        {id: '3', title: 'Example 3', content: 'Lorem Ipsum'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer