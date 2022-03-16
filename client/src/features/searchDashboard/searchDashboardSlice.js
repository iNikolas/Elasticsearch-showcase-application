import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import handleGetStatistic from "../../app/handleGetStatistic";

const initialState = {
    statistic: null,
    search: {
        ageSpan: {
            gte: 0,
            lte: 0
        },
        titleOptions: [],
        genderOptions: []
    }
}

export const fetchStatistic = createAsyncThunk(
    'statistic/requestStatus',
    async () => {
        const response = await handleGetStatistic()
        return response
    }
)

export const searchDashboardSlice = createSlice({
    name: 'searchDashboard',
    initialState,
    reducers: {
        setAgeSpan: (state, action) => {
            state.search.ageSpan = {
                gte: action.payload[0],
                lte: action.payload[1]
            }
        },
        setTitleOptions: (state, action) => {
            state.search.titleOptions = action.payload.map(title => title.value)
        },
        setGenderOptions: (state, action) => {
            state.search.genderOptions = action.payload.map(gender => gender.value)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStatistic.fulfilled, (state, action) => {
            state.statistic = action.payload
        })
    }
})

export const {setAgeSpan, setGenderOptions, setTitleOptions} = searchDashboardSlice.actions

export default searchDashboardSlice.reducer