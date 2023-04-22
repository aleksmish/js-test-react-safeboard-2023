import './users.styles.scss'
import React, { useState } from 'react'
import data from '../../constants/data'
import cards from '../../assets/icons/cards.png'
import groupsIcon from '../../assets/icons/groups.png'
import table from '../../assets/icons/table.png'
import UsersTable from '../../components/users-table/users-table.component'
import UsersCards from '../../components/users-cards/users-cards.component'
import UsersGroups from '../../components/users-groups/users-groups.component'

export const VIEWS = {
    table: 'table',
    cards: 'cards',
    groups: 'groups',
}

const defaultGroups = [
    { _id: 1, name: 'Управление', users: [] },
    { _id: 2, name: 'Дизайнеры', users: [] },
]

function Users() {
    const [users, setUsers] = useState(
        data.sort((user1, user2) => {
            return user1.name.localeCompare(user2.name)
        })
    )
    const [view, setView] = useState(VIEWS.table)
    const [searchField, setSearchField] = useState('')
    const [selectedAll, setSelectedAll] = useState(false)
    const [groups, setGroups] = useState(defaultGroups)

    const handleClick = (newView) => {
        setView(newView)
    }

    const handleChange = (event, id) => {
        const checked = event.target.checked
        const modifiedUsers = users.map((user) => {
            if (user._id === id && checked) {
                user.selected = true
            } else if (user._id === id && !checked) {
                user.selected = false
            }
            return user
        })
        setUsers(modifiedUsers)
    }

    const handleSearchFieldChange = (event, id) => {
        setSearchField(event.target.value)
    }

    const handleSelectAll = (event) => {
        const checked = event.target.checked
        const modifiedUsers = users.map((user) => {
            user.selected = checked
            return user
        })
        setUsers(modifiedUsers)
        setSelectedAll(!selectedAll)
    }

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchField.toLowerCase())
    )

    const fromViewToJsx = {
        [VIEWS.table]: (
            <UsersTable
                filteredUsers={filteredUsers}
                selectedAll={selectedAll}
                setSelectedAll={setSelectedAll}
                onChange={handleChange}
                onSelectAll={handleSelectAll}
            />
        ),
        [VIEWS.cards]: (
            <UsersCards
                filteredUsers={filteredUsers}
                selectedAll={selectedAll}
                setSelectedAll={setSelectedAll}
                onChange={handleChange}
                onSelectAll={handleSelectAll}
            />
        ),
        [VIEWS.groups]: <UsersGroups groups={groups} setGroups={setGroups} />,
    }

    return (
        <div className="users-container">
            <div className="header">
                <input
                    type="text"
                    placeholder="Найти пользователя"
                    value={searchField}
                    onChange={handleSearchFieldChange}
                />
                <div className="views">
                    <button
                        style={{ backgroundImage: `url(${table})` }}
                        onClick={(event) => handleClick(VIEWS.table)}
                    />
                    <button
                        style={{ backgroundImage: `url(${cards})` }}
                        onClick={(event) => handleClick(VIEWS.cards)}
                    />
                    <button
                        style={{ backgroundImage: `url(${groupsIcon})` }}
                        onClick={(event) => handleClick(VIEWS.groups)}
                    />
                </div>
            </div>
            {fromViewToJsx[view]}
        </div>
    )
}

export default Users
