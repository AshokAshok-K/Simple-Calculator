import { ACTIONS } from "./App"

const DigitButton= ({dispatch,digit}) => {

    const dispatchHandler = () => {
        dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})
    }
    return(
        <button onClick={dispatchHandler}>{digit}</button>
    )
}

export default DigitButton