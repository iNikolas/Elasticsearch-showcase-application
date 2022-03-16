import React from "react";
import './UserCard.css'

const UserCard = ({user}) => {
    const {about_me, avatar, country, email, experience_years, first_name, gender, id, last_name, previous_job, title} = user._source

    return <div className='user-card-wrapper'>
        <div className='user-card-score'><span>Score: </span>{user._score}</div>
        <img src={avatar}/>
        <div className='user-card-text-content-wrapper'>
            <div>
                <span>ID: </span>
                <span>Title: </span>
                <span>Gender: </span>
                <span>Name: </span>
                <span>Surname: </span>
                <span>Exp.(yrs): </span>
                <span>Country: </span>
                <span>E-mail: </span>
                <span>About me: </span>
                {previous_job && <span>Prev. job: </span>}
            </div>
            <div>
                <span>{id}</span>
                <span>{title}</span>
                <span>{gender}</span>
                <span>{first_name}</span>
                <span>{last_name}</span>
                <span>{experience_years}</span>
                <span>{country}</span>
                <span>{email}</span>
                <span>{about_me}</span>
                {previous_job && <span>{previous_job}</span>}
            </div>
        </div>
    </div>
}

export default UserCard