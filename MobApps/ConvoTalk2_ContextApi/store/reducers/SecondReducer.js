import { ADD_VALUE, REMOVE_VALUE } from '../ActionTypes'

// Logic Here
const SecondReducer = (state, action) => {
    // action.type -> What type of action is?
    // action.payload -> The value which we add's in action it will move in payLoad

    switch (action.type) {
        case ADD_VALUE:
            let newState = [...state]
            newState.push(action.payload)
            console.log(newState)
            return newState
            
        case REMOVE_VALUE:
            newState = [...state]
            newState.pop()
            return newState

        default:
            state
    }

}
export default SecondReducer;