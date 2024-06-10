// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                title: action.payload.title,
                content: action.payload.content,
                done: false
            });
        },
        // removeTodo: (state, action)=> {

        // },
        // toggleTodo: () => {

        // }
    }
})

export default todosSlice.reducer;