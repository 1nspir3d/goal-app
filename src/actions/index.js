export function setInput(input) {
    return(
        {
            type: 'SET_INPUT',
            text: input
        }
    )
}

export function addGoal(goal, id) {
    return(
        {
            type: 'ADD_GOAL',
            text: goal,
            id: id
        }
    )
}

export function removeGoal(index) {
    return(
        {
            type: 'REMOVE_GOAL',
            item: index
        }
    )
}

export function setColor(index) {
    return (
        {
            type: 'SET_COLOR',
            index: index,
        }
    )
}

export function setDelete() {
    return(
        {
            type: 'SET_DELETE'
        }
    )
}

export function showModal() {
    return(
        {
            type: 'SHOW_MODAL'
        }
    )
}
