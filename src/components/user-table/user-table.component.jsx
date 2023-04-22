import './user-table.styles.scss'
import React from 'react'

const UserTable = ({ user, ind, onChange, setSelectedAll }) => {
    const handleChange = (event) => {
        onChange(event, user._id)
        setSelectedAll(false)
    }
    return (
        <tr
            className={`user-table-container ${ind % 2 ? 'odd' : ''} ${
                user.selected ? 'selected-row' : ''
            }`}
        >
            <td style={{ textAlign: 'center' }}>
                <input
                    type="checkbox"
                    checked={user.selected == null ? '' : user.selected}
                    onChange={handleChange}
                />
            </td>
            <td>{user.name}</td>
            <td>
                {'companydomain/' + user.name.split(' ').join('').toLowerCase()}
            </td>
            <td>{user.email}</td>
            <td>{user.group}</td>
            <td>{user.phone}</td>
        </tr>
    )
}

export default UserTable
