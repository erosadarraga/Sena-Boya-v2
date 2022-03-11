import React, { useState } from 'react';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined, FundViewOutlined } from '@ant-design/icons';
import "./analitica.css"
import { Medidas } from '../Medidas';
import { GraphLine } from '../GraphLine';
import { usePeticionHook } from '../../hook/usePeticionHook';
const { Title, Text } = Typography;
const { Option } = Select;

export const Analitica = () => {
    const [active, setActive] = useState(false)

    const { data, options, resultado } = usePeticionHook()

    const stats = [
        { title: 'Price to USD', value: 34, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: 35, icon: <NumberOutlined /> },
        { title: '24h Volume', value: 55, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: 66, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: 55, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: 55, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: 66, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: <CheckOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: 44, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: 42, icon: <ExclamationCircleOutlined /> },
    ];

    const onClikc = () => {
        setActive(!active)
        console.log(active)
    }
    return (
        <Col className="coin-detail-container">

            <Col className="coin-heading-container" >
                <Title level={2} className="coin-name" onClick={onClikc}>
                    {active ? "grafica " : "analitica "}
                    {active ? <i className='bx bx-receipt icon ' ></i> : <FundViewOutlined />}

                </Title>
            </Col>

            {active ? <GraphLine data={data} options={options} className="col-12" /> : <Col className="stats-container">
                <Col className="coin-value-statistics">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading"> Value Statistics</Title>
                        <p>An overview showing the statistics of such as the base and quote currency, the rank, and trading volume.</p>
                    </Col>
                    {stats.map(({ icon, title, value }, index) => (
                        <Col className="coin-stats" key={index}>
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>
                <Col className="other-stats-info">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">Other Stats Info</Title>
                        <p>An overview showing the statistics of , such as the base and quote currency, the rank, and trading volume.</p>
                    </Col>
                    {genericStats.map(({ icon, title, value }, index) => (
                        <Col className="coin-stats" key={index}>
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>
            </Col>}





        </Col>
    )
}
