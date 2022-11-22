import React, {useEffect, useState} from "react";
import {Carousel} from "../../modules/Carousel/Carousel";
import {db} from "../../app/data/mock-data";
import {Roulette} from "../../components/roulet/Roulette";
import {TextTyping} from "../../components/typing-text/TextTyping";

require('./main-page.scss')


export const MainPage = () => {
    const data = db.data; // data

    /* number of periods */
    const [periods, setPeriods] = useState<number>(2)

    function periodsPlus() {
        if (periods < 6) setPeriods(prev => prev + 1)
    }

    function periodsMinus() {
        if (periods > 2) setPeriods(prev => prev - 1)
    }

    /* selected period */
    const [period, setPeriod] = useState<number>(2)
    useEffect(() => {
        setPeriod(1)
    }, [periods])

    function periodPlus() {
        if (periods > period) setPeriod(prev => prev + 1)
    }

    function periodMinus() {
        if (period > 1) setPeriod(prev => prev - 1)
    }

    return (
        <section className={'wrapper_main-page'}>
            <div className={'main-page__switcher'}>
                <button onClick={periodsMinus}>-</button>
                <p>dots: {periods}</p>
                <button onClick={periodsPlus}>+</button>
            </div>

            <div className={'main-page__title'}>
                <div className={'main-page__title__line'}></div>
                <h1>
                    Исторические даты
                </h1>
            </div>

            <div className={'main-page__years'}>
                <p>
                    <TextTyping text={data[period - 1].body.data[0].year}/>
                </p>
                <p>
                    <TextTyping text={data[period - 1].body.data[data[period - 1].body.data.length - 1].year}/>
                </p>
            </div>

            <Carousel
                period={period}
                periods={periods}
                periodMinus={periodMinus}
                periodPlus={periodPlus}
            />

            <Roulette
                periods={periods}
                period={period}
                setPeriod={setPeriod}
            />

        </section>
    )
}