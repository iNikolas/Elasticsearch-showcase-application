import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import handleDataFetching from "./handleDataFetching";

const initialState = {
    users: [],
}

export const fetchUsers = createAsyncThunk(
    'users/requestStatus',
    async (searchData) => {
        const response = await handleDataFetching(searchData)
        return response
    }
)

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export const {} = appSlice.actions

export default appSlice.reducer