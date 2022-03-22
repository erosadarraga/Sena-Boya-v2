import { useState, useEffect } from 'react'
import { Data, Datum, Options } from '../interface/api';
import { variance, standardDeviation, medianAbsoluteDeviation, mean, zScore } from "simple-statistics"
export const usePeticionHook = () => {
    const [resultado, setresultado] = useState<Datum[]>([])
    const [options, setOptions] = useState<Options>()
    const [data, setData] = useState<Data>()
    const [mapRest2, setMapRest2] = useState<number[]>()
    const [loading, setLoading] = useState(false)
    const [error500, setError500] = useState<boolean>(false)

    const [resVarianceUse, setResVarianceUse] = useState<number>()
    const [resStandardDeviationUse, setResStandardDeviationUse] = useState<number>()
    const [resMedianAbsoluteDeviationUse, setResMedianAbsoluteDeviationUse] = useState<number>()
    const [resMeanUse, setResMeanUse] = useState<number>()
    const [resZScoreUse, setResZScoreUse] = useState<number>()

    const URL = 'https://boyaxam.herokuapp.com/data'
    const URL2 = "https://boyaxam.herokuapp.com/vector"

    useEffect(() => {
        // (1) define within effect callback scope
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(URL);
                const json = await res.json();
                const { data: rest } = json

                const res2 = await fetch(URL2);
                const json2 = await res2.json();
                const { data: rest2 } = json2



                const mapRest2 = rest2.reverse().map((item: { temperatura: any; }) => item.temperatura)
                const mapRest1 = rest.reverse().map((item: { temperatura: any; }) => item.temperatura)
                const array = mapRest2.map((res: any) => Number(res))
                const arrayAny = mapRest1.map((res: any) => Number(res))

                const resVariance = variance(array)
                const resStandardDeviation = standardDeviation(array)
                const resMedianAbsoluteDeviation = medianAbsoluteDeviation(array)
                const resMean = mean(array)
                const resZScore = zScore(arrayAny[0], resMean, resStandardDeviation)
                setResVarianceUse(resVariance)
                setResStandardDeviationUse(resStandardDeviation)
                setResMedianAbsoluteDeviationUse(resMedianAbsoluteDeviation)
                setResMeanUse(resMean)
                setResZScoreUse(resZScore)



                const data = {

                    labels: rest2.map((item: { created_time: any; }) => item.created_time),
                    datasets: [
                        /* {
                          label: 'PH',
                          data: rest2.map((item) => item.ph),
                          borderColor: 'rgb(255, 99, 132)',
                          backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }, */
                        {
                            label: 'TEMPERATURA',
                            data: mapRest2,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                    ],
                };

                const options = {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top' as const,
                        },
                        title: {
                            display: true,
                            text: 'Linia de tiempo',
                        },
                    },
                };
                setMapRest2(array)
                setData(data)
                setOptions(options)
                setresultado(rest);
                console.log(mapRest2)
                setLoading(false)

                setError500(false)
            } catch (error) {
                setError500(true)
                console.log(error, "mal");
            }
        };
        const id = setInterval(() => {
            fetchData();
        }, 15000);

        fetchData();

        return () => clearInterval(id);
    }, [])

    return {
        resultado, data, options, mapRest2, resVarianceUse, resStandardDeviationUse, resMedianAbsoluteDeviationUse, resMeanUse, resZScoreUse, error500
    }


}
