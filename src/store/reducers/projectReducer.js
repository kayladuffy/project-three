const initState = {
    projects: [
        {id: '1', title: 'Laundry', content: 'Wash dark and red colored clothing.'},
        {id: '2', title: 'Clean the Kitchen', content: 'Wipe down counters and mop the floor.'},
        {id: '3', title: 'Buy Groceries', content: 'Milk, eggs, bread, lettuce, tomato, strawberries and bananas.'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer