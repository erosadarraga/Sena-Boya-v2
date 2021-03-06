import React from 'react'
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'
import { RevenueByMonthsChart } from '../components/RevenueByMonthsChart'
import TopNav from '../components/topnav/TopNav'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    return (<>
    
    
        <DashboardWrapper>
           
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="row">
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

            </DashboardWrapperMain>
            <DashboardWrapperRight>
                <div className="title mb">Prueba</div>
                <div className="mb">
                    <OverallList />
                </div>
                <div className="title mb">Data</div>
                <div className="mb">
                    <RevenueList />
                </div>
            </DashboardWrapperRight>
        </DashboardWrapper>
    </>
    )
}

export default Dashboard

