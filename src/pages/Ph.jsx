import React from 'react'
import { Analitica } from '../components/analitica/Analitica'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain2, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import { GraphLine } from '../components/GraphLine'
import { Medidas } from '../components/Medidas'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'
import { usePeticionHook } from '../hook/usePeticionHook'

export const Ph = () => {

    return (<>
        <DashboardWrapper>
            <DashboardWrapperMain2>

                <div className="row">
                    <div className="col-12">
                        <Box>
                            <Analitica />
                        </Box>
                    </div>
                </div>

            </DashboardWrapperMain2>

        </DashboardWrapper>

    </>
    )
}
