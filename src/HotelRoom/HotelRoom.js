import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';
import './HotelRoom.css'

const HotelRoom = () => {
    const [room, setRoom] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRoom(data))
    },[])
    return (
        <div>
            <h1 className='title-text'>Our Hotel Rooms</h1>
            <div className='rooms-container'>
            {
                room.map(rooms =><Room
                key={rooms.id}
                rooms={rooms}
                ></Room>)
            }
            </div>
        </div>
    );
};

export default HotelRoom;