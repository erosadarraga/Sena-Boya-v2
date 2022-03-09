import React from 'react'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import { GraphLine } from '../components/GraphLine'
import { Medidas } from '../components/Medidas'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'
import { usePeticionHook } from '../hook/usePeticionHook'

export const Ph = () => {
    const { data, options, resultado } = usePeticionHook()
    return (<>
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-8 col-md-12">
                        <div className="row">
                            hola
                        </div>



                    </div>
                    <div className="col-4 hide-md">
                        hola2
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Box>
                            <GraphLine data={data} options={options} />
                        </Box>
                    </div>
                </div>

            </DashboardWrapperMain>
            <DashboardWrapperRight>
                <div className="title mb">Overall</div>
                <div className="mb">
                    <OverallList />
                </div>
                <div className="title mb">Revenue by channel</div>
                <div className="mb">
                    <RevenueList />
                </div>
            </DashboardWrapperRight>
        </DashboardWrapper>

    </>
    )
}
