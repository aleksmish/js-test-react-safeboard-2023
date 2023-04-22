import './users-groups.styles.scss'
import Modal from '../modal/modal.component'
import UserPlate from '../user-plate/user-plate.component'
import React, { useState } from 'react'

const UsersGroups = ({ groups, setGroups }) => {
    const [newGroup, setNewGroup] = useState('')
    const [userName, setUserName] = useState('')
    const [userGroup, setUserGroup] = useState('')
    const [isGroupModalVisible, setIsGroupModalVisible] = useState(false)
    const [isUserModalVisibe, setIsUserModalVisible] = useState(false)
    const [currentGroup, setCurrentGroup] = useState(null)

    const handleNameChange = (event) => {
        setUserName(event.target.value)
    }

    const handleGroupChange = (event) => {
        setUserGroup(event.target.value)
    }

    const handleAddUserClick = (groupId) => {
        setIsUserModalVisible(false)
        setUserName('')
        setUserGroup('')
        const modifiedGroups = groups.map((group) => {
            if (group._id === groupId) {
                const newUser = { _id: Date.now(), userName, userGroup }
                return { ...group, users: group.users.concat(newUser) }
            }
            return group
        })
        setGroups(modifiedGroups)
        setCurrentGroup(null)
    }

    const handleAddGroupClick = (event) => {
        if (newGroup === '') return
        setIsGroupModalVisible(false)
        setNewGroup('')
        setGroups([...groups, { _id: Date.now(), name: newGroup, users: [] }])
    }

    const handleNewGroupChange = (event) => {
        setNewGroup(event.target.value)
    }

    const handleOpenUserModalClick = (groupId) => {
        setCurrentGroup(groupId)
        setIsUserModalVisible(true)
    }

    const handleOpenGroupModalClick = (event) => {
        setIsGroupModalVisible(true)
    }

    return (
        <div className="users-groups">
            {groups.map((group) => (
                <div key={group._id} className="user-group">
                    <div className="header">{group.name}</div>
                    <div className="main">
                        {group.users.map((user) => (
                            <UserPlate key={user._id} user={user} />
                        ))}
                    </div>
                    <div
                        className="footer"
                        onClick={(event) => handleOpenUserModalClick(group._id)}
                    >
                        Добавить пользователя...
                    </div>
                </div>
            ))}
            {groups.length !== 4 && (
                <div className="add-group" onClick={handleOpenGroupModalClick}>
                    Добавить группу
                </div>
            )}
            <Modal
                isModalVisible={isGroupModalVisible}
                setIsModalVisible={setIsGroupModalVisible}
            >
                <input
                    type="text"
                    placeholder={'Введите название группы'}
                    value={newGroup}
                    onChange={handleNewGroupChange}
                />
                <button onClick={handleAddGroupClick}>Добавить группу</button>
            </Modal>
            <Modal
                isModalVisible={isUserModalVisibe}
                setIsModalVisible={setIsUserModalVisible}
            >
                <input
                    type="text"
                    placeholder={'Введите имя'}
                    value={userName}
                    onChange={handleNameChange}
                />
                <input
                    type="text"
                    placeholder={'Введите группу'}
                    value={userGroup}
                    onChange={handleGroupChange}
                />
                <button onClick={(event) => handleAddUserClick(currentGroup)}>
                    Добавить группу
                </button>
            </Modal>
        </div>
    )
}

export default UsersGroups
