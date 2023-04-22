import './user-card.styles.scss'
import avatar from '../../assets/icons/avatar.png'
import React from 'react'
import download from '../../assets/icons/download.png'

const UserCard = ({ user, onChange, setSelectedAll }) => {
    const handleChange = (event) => {
        onChange(event, user._id)
        setSelectedAll(false)
    }
    return (
        <div
            className={`user-card-container ${
                user.selected ? 'selected-card' : ''
            }`}
        >
            <div className="header">
                <input
                    type="checkbox"
                    checked={user.selected == null ? '' : user.selected}
                    onChange={handleChange}
                />
                <img src={download} />
            </div>
            <div className="main">
                <p>{user.name}</p>
                <img loading="lazy" src={avatar} />
            </div>
            <div className="footer">
                <p
                    style={{
                        fontWeight:
                            user.group === 'Unmanaged' ? 'bold' : 'normal',
                    }}
                >
                    {user.group}
                </p>
                <p>{user.phone}</p>
            </div>
        </div>
    )
}

export default UserCard
