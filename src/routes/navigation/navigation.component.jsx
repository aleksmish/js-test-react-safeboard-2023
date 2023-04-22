import './navigation.styles.scss'
import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation-container">
                <Link className="title" to={''}>
                    Отдел разработки безопасной платформы | Safeboard 2023
                </Link>
                <div className="links">
                    <Link to={'/users'}>Пользователи</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
