// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducer: {
        add: (state, action) => {
            state.value += action.payload;
        },
        substract: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export const { add, substract } = calculatorSlice.actions;

export default calculatorSlice.reducer;