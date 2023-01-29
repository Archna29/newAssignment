import React from 'react'
import './UserCard.css';
const UserCard = (props) => {
  return (
   <>
    <div className="col">
    <div className="card">
      <img src={props.img} className="card-img-top" id ="img" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{props.first_name} {props.last_name}</h4>
        <p className="card-text">{props.email}</p>
      </div>
   
    </div>
  </div>
   </>
  )
}

export default UserCard;