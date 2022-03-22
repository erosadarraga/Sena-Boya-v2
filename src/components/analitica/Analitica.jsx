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

    const { data, options, resultado, resMeanUse, resMedianAbsoluteDeviationUse, resStandardDeviationUse, resVarianceUse, resZScoreUse } = usePeticionHook()

    const stats = [
        { title: 'Diferencia', value: Math.round((resVarianceUse + Number.EPSILON) * 100) / 100, icon: <FundOutlined /> },
        { title: 'Desviacion Estandar', value: Math.round((resStandardDeviationUse + Number.EPSILON) * 100) / 100, icon: <FundOutlined /> },
        { title: 'Desviación Absoluta Mediana', value: resMedianAbsoluteDeviationUse, icon: <FundOutlined /> },
        { title: 'Puntuación  Z', value: Math.round((resZScoreUse + Number.EPSILON) * 100) / 100, icon: <FundOutlined /> },
        { title: 'Fake', value: 1, icon: <FundOutlined /> },
    ];

    const genericStats = [
        { title: 'Promedio ', value: Math.round((resMeanUse + Number.EPSILON) * 100) / 100, icon: <FundOutlined /> },
        { title: 'Fake', value: 1, icon: <FundOutlined /> },
        { title: 'Fake', value: 1, icon: <FundOutlined /> },
        { title: 'Fake', value: 1, icon: <FundOutlined /> },
        { title: 'Fake', value: 1, icon: <FundOutlined /> },
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

            {active ? <Col className="stats-container">
                <Col className="coin-value-statistics">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading"> MEDIDAS DE DISPERSIÓN</Title>
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
                        <Title level={3} className="coin-details-heading">MEDIDAS DE TENDENCIA CENTRAL</Title>
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
            </Col> : <GraphLine data={data} options={options} className="col-12" />
            }





        </Col>
    )
}
