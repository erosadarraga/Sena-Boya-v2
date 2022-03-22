import { Result } from 'antd'
import { Button } from 'antd/lib/radio'
import React from 'react'

export const Error500 = () => {
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary">Back Home</Button>}
        />
    )
}
