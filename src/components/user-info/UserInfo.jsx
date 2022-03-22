import React from 'react'
import './user-info.scss'
import logo from "../../assets/images/undraw_handcrafts_welcome.svg"

const UserInfo = ({ user }) => {
    return (
        <div className='user-info'>

            <div className="user-info__name">
                <span>Proyecto EMMA Sensores</span>
            </div>
        </div>
    )
}

export default UserInfo
