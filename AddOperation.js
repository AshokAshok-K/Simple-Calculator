import { ACTIONS } from "./App"

const AddOperation = ({dispatch,operation}) => {

    const dispatchHandler = () => {
        dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})
    }
    return(
        <button onClick={dispatchHandler}>{operation}</button>
    )
}

export default AddOperation