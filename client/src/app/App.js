import './App.css';
import React, {useEffect, useMemo, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import debounce from "./debounce";
import UserCard from "../features/userCard/UserCard";
import SearchDashboard from "../features/searchDashboard/SearchDashboard";
import {fetchStatistic} from "../features/searchDashboard/searchDashboardSlice";
import handleDataDispatch from "./handleDataDispatch";

const DEBOUNCE_MS = 50


function App() {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const {users} = useSelector(state => state.users)
    const {statistic, search} = useSelector(state => state.search)
    const debouncedFetching = useMemo(() => debounce(handleDataDispatch, DEBOUNCE_MS), [])

    const usersData = users.map(user => <UserCard key={user._id} user={user}/>)

    const handleSearchTextChange = (e) => setSearchText(e.target.value)

    useEffect(() => dispatch(fetchStatistic()), [])
    useEffect(() => {
        if (statistic) debouncedFetching({text: searchText, search}, dispatch)
    }, [search, searchText, statistic])

    return (
        <>
            <input placeholder='start search...' className='app-main-input' onChange={handleSearchTextChange}
                   value={searchText} type='text'/>
            {statistic && <SearchDashboard/>}
            <div className='app-main-wrapper'>
                {usersData}
            </div>
        </>
    );
}

export default App;
