import React from 'react'

import { Datum } from "../interface/api"

interface Props {
    resultado: Datum[]
}
export const Medidas = ({ resultado }: Props) => {

    if (resultado[0]?.ph) {

    }
    return (
        <>
            <div className="card mb-3 col-md-12 pt-2" >
                <div className="row g-0">
                    <div className="col-md-3 text-center">

                    </div>
                    <div className="col-md-3 " style={{ backgroundColor: 'rgba(255, 99, 132, 0.4)' }} >
                        <div className="card-body">
                            <h4 className="card-title text-center font-monospace fst-italic">PH</h4>
                            <h4 className='text-center'>{resultado[0]?.ph ? resultado[0].ph : "Cargando..."}</h4>


                        </div>
                    </div>
                    <div className="col-md-3 text-center">

                    </div>
                    <div className="col-md-3" style={{ backgroundColor: 'rgba(53, 162, 235, 0.4)' }}>
                        <div className="card-body">
                            <h4 className="card-title  text-center font-monospace fst-italic">Temperatura</h4>

                            <h4 className='text-center'>{resultado[0]?.temperatura ? resultado[0].temperatura : "Cargando..."}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}
