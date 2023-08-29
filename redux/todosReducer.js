import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    optionData: {
      sortBy: "addOrder",
      sortOrder: "asc",
    },
    ListData: {},
  }
};

const todosReducer = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const id = action.payload.id;
      state.data.ListData[id] = { ...action.payload, id};
    },

    deleteTodo: (state, action) => {
      const id = action.payload;
      delete state.data.ListData[id];
    },

    completeTodo: (state, action) => {
      const {id, isComplete } = action.payload;
      state.data.ListData[id].completed = isComplete;
    },

    editTodoAction: (state, action) => {
      const id = action.payload.id;
      state.data.ListData[id] = { ...action.payload};
    },

    showEditForm: (state, action) => {
      const {id, isEditFormVisible} = action.payload;
      state.data.ListData[id].isEditFormVisible = isEditFormVisible;
    },

    changeSortBy: (state, action) => {
      const sortBy = action.payload;
      state.data.optionData.sortBy = sortBy;

    },

    changeSortOrder: (state, action) => {
      const sortOrder = action.payload;
      state.data.optionData.sortOrder = sortOrder;
    },

    clearAllTodos: (state) => {
      state.data.ListData = {}
    }
  },
});

export const { addTodo, deleteTodo, completeTodo, editTodoAction, showEditForm, changeSortBy, changeSortOrder, clearAllTodos } = todosReducer.actions;
export default todosReducer.reducer;
