import './users-table.styles.scss'
import React from 'react'
import UserTable from '../user-table/user-table.component'

const UsersTable = ({
    filteredUsers,
    selectedAll,
    onChange,
    setSelectedAll,
    onSelectAll,
}) => {
    return (
        <table cellSpacing={0} className="users-table-container">
            <thead>
                <tr>
                    <th style={{ textAlign: 'center' }}>
                        <input
                            type="checkbox"
                            checked={selectedAll}
                            onChange={onSelectAll}
                        />
                    </th>
                    <th style={{ fontWeight: 'bold' }}>Полное имя</th>
                    <th>Учетная запись</th>
                    <th>Электронная почта</th>
                    <th>Группа</th>
                    <th>Номер телефона</th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers.map((user, ind) => (
                    <UserTable
                        key={user._id}
                        ind={ind}
                        user={user}
                        setSelectedAll={setSelectedAll}
                        onChange={onChange}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default UsersTable
