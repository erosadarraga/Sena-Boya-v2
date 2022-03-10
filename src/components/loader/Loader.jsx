import React from 'react'
import { Spin } from "antd"
import "./loader.css"

export const Loader = () => {
    return (
        <div className='loader'>
            <Spin size="large" tip="Loading..." />
        </div>
    )
}
