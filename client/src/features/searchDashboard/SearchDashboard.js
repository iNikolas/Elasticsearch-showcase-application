import React, {useEffect, useMemo, useState} from "react"
import Select from 'react-select'
import './SearchDashboard.css'
import {StyledSlider, Thumb, Track} from "./StyledSlider"
import {useSelector, useDispatch} from 'react-redux'
import {batch} from 'react-redux'
import {setAgeSpan, setGenderOptions, setTitleOptions} from "./searchDashboardSlice";

const SearchDashboard = () => {

    const {statistic: {experience, gender, titles}} = useSelector(state => state.search)
    const dispatch = useDispatch()

    const {min, max} = experience
    const [sliderValues, setSliderValues] = useState([min, max])

    const titleOptions = useMemo(() => titles.buckets.map(title => ({
        value: title.key,
        label: `${title.key} (${title.doc_count})`
    })), [titles])
    const genderOptions = useMemo(() => gender.buckets.map(gender => ({
        value: gender.key,
        label: `${gender.key} (${gender.doc_count})`
    })), [gender])

    const handleSliderMove = (value) => {
        setSliderValues(value)
        dispatch(setAgeSpan(value))
    }

    const handleGenderChangeOptions = (event) => {
        dispatch(setGenderOptions(event))
    }

    const handleTitleChangeOptions = (event) => {
        dispatch(setTitleOptions(event))
    }

    useEffect(() => {
        batch(() => {
            dispatch(setAgeSpan([min, max]))
            dispatch(setTitleOptions(titleOptions))
            dispatch(setGenderOptions(genderOptions))
        })
    }, [])

    return <div className='search-dashboard-main-wrapper'>
        <StyledSlider
            min={min}
            max={max}
            value={sliderValues}
            onChange={handleSliderMove}
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            renderTrack={Track}
            renderThumb={Thumb}
        />
        <Select
            closeMenuOnSelect={false}
            isClearable={false}
            isSearchable={false}
            isMulti={true}
            name="titles"
            options={titleOptions}
            defaultValue={titleOptions}
            onChange={handleTitleChangeOptions}
        />
        <Select
            closeMenuOnSelect={false}
            isClearable={false}
            isSearchable={false}
            isMulti={true}
            name="genders"
            options={genderOptions}
            defaultValue={genderOptions}
            onChange={handleGenderChangeOptions}
        />
    </div>
}

export default SearchDashboard