import {configureStore} from '@reduxjs/toolkit'
import searchDashboardReducer from '../features/searchDashboard/searchDashboardSlice'
import appReducer from '../app/appSlice'

export const store = configureStore({
    reducer: {
        search: searchDashboardReducer,
        users: appReducer
    },
})