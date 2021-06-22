/**
 * Cheeks the input, handles the correct format and makes sure input does not go out of bound.
 * 
 * @param {event} event 
 * @param {action to dispatch} addPeriod 
 * @param {action to dispatch} setPressure 
 * @param {dispatcher} dispatch 
 */

export const parseInput = (event, addPeriod, setPressure, dispatch) => {
    const input = event.target.value;
    if(event.nativeEvent.inputType === 'deleteContentBackward'){
        dispatch(setPressure(event.target.value));
    }else if(input.length < 5){
        if(input.length === 2){
            dispatch(setPressure(event.target.value));
            dispatch(addPeriod());
        }else if(input.length === 3){
            dispatch(addPeriod());
        }else{
            dispatch(setPressure(event.target.value));
        }
    }    
}