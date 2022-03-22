import React from 'react'
import { Analitica } from '../components/analitica/Analitica'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain2 } from '../components/dashboard-wrapper/DashboardWrapper'
import { Error500 } from '../components/Error500'
import { usePeticionHook } from '../hook/usePeticionHook'

export const Tem = () => {
    const { error500 } = usePeticionHook()
    return (<>

        <DashboardWrapper>
            <DashboardWrapperMain2>

                <div className="row">
                    <div className="col-12">
                        <Box>
                            {error500 ? <Error500 /> : <Analitica />}
                        </Box>
                    </div>
                </div>

            </DashboardWrapperMain2>

        </DashboardWrapper>
    </>


    )
}

