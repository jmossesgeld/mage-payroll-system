import { ChangeEvent, Reducer, ReducerAction, SyntheticEvent, useReducer } from "react";

interface State {
  value: string;
  isTouched: boolean;
}

interface Action {
  type: string;
  value?: string;
}

export interface InputHook {
  value: string;
  isValid: any;
  error: boolean;
  onChange: (event: { target: { value: string } }) => void;
  onBlur: (event: any) => void;
  reset: () => void;
}

const inputStateReducer: Reducer<State, Action> = (state: State, action: Action) => {
  if (action.type === "INPUT") {
    return { value: action.value as string, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return state;
};

const useInput = (initialValue?: string, validateValue?: (value: string) => boolean): InputHook => {
  const initialInputState: State = {
    value: initialValue || "",
    isTouched: false,
  };

  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue?.(inputState.value) ?? true;
  const error = !valueIsValid && inputState.isTouched;

  const onChange = (event: { target: { value: string } }) => {
    console.log("onChange: ", event.target.value);
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const onBlur = (event: any) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    error,
    onChange,
    onBlur,
    reset,
  };
};

export default useInput;
