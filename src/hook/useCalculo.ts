import { variance } from "simple-statistics"
import { usePeticionHook } from "./usePeticionHook"
import { useState } from 'react';

export const useCalculo = () => {
    const [varianceDat, setVarianceDat] = useState<number>()
    const { mapRest2 } = usePeticionHook()

    if (mapRest2 !== undefined) {
        const resVariance = variance(mapRest2)
        console.log(mapRest2)
        setVarianceDat(resVariance)
    }


    return {
        varianceDat
    }

}
