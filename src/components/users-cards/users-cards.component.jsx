import './users-cards.styles.scss'
import React from 'react'
import UserCard from '../user-card/user-card.component'

const UsersCards = ({ filteredUsers, setUsers, setSelectedAll, onChange }) => {
    return (
        <div className="users-cards-container">
            {filteredUsers.map((user) => (
                <UserCard
                    key={user._id}
                    user={user}
                    setUsers={setUsers}
                    setSelectedAll={setSelectedAll}
                    onChange={onChange}
                />
            ))}
        </div>
    )
}

export default UsersCards
