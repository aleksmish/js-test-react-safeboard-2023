import './user-plate.styles.scss'
import React from 'react'

const UserPlate = ({ user }) => {
    return (
        <div className="user-plate-container">
            <div className="name">{user.userName}</div>
            <div className="group">{user.userGroup}</div>
        </div>
    )
}

export default UserPlate
