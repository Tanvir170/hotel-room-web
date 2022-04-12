import React from 'react';
import './Room.css'

const Room = ({rooms}) => {
    const {title, img, body} = rooms;
    return (
        <div className='rooms'>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{body}</p>
            <button className='btn-booking'>Booking</button>
        </div>
    );
};

export default Room;