import React from 'react'
import './user-info.scss'

const UserInfo = ({ user }) => {
    return (
        <div className='user-info'>
            <div className="user-info__img">
                <img alt="" />
            </div>
            <div className="user-info__name">
                <span>Sena boya</span>
            </div>
        </div>
    )
}

export default UserInfo
