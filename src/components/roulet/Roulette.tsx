import React from "react";
import {db} from "../../app/data/mock-data";

interface propsI {
    periods: number,
    period: number,
    setPeriod: React.Dispatch<React.SetStateAction<number>>,
}


export const Roulette = (props: propsI) => {

    const data = db.data

    return (
        <>
            <div className={[
                'circle',
                `circle_${props.periods}`,
                `sansara_${props.period}`
            ].join(' ')}>
                <div className={'circle__dot'}
                     onClick={() => props.setPeriod(1)}
                >
                    <div className={[
                        'dot',
                        props.period === 1 ? 'dot_selected' : ''
                    ].join(' ')}>
                        <div className={'inner-dot'}>1</div>
                        <p className={'dot-name'}>{ data[0] && data[0].name }</p>
                    </div>
                </div>
                <div className={'circle__dot'}
                     onClick={() => props.setPeriod(2)}
                >
                    <div className={[
                        'dot',
                        props.period === 2 ? 'dot_selected' : ''
                    ].join(' ')}>
                        <div className={'inner-dot'}>2</div>
                        <p className={'dot-name'}>{ data[1] && data[1].name }</p>
                    </div>
                </div>
                <div className={'circle__dot'}
                     onClick={() => props.setPeriod(3)}
                >
                    <div className={[
                        'dot',
                        props.period === 3 ? 'dot_selected' : ''
                    ].join(' ')}>
                        <div className={'inner-dot'}>3</div>
                        <p className={'dot-name'}>{ data[2] && data[2].name }</p>
                    </div>
                </div>
                <div className={'circle__dot'}
                     onClick={() => props.setPeriod(4)}
                >
                    <div className={[
                        'dot',
                        props.period === 4 ? 'dot_selected' : ''
                    ].join(' ')}>
                        <div className={'inner-dot'}>4</div>
                        <p className={'dot-name'}>{ data[3] && data[3].name }</p>
                    </div>
                </div>
                <div className={'circle__dot'}
                     onClick={() => props.setPeriod(5)}
                >
                    <div className={[
                        'dot',
                        props.period === 5 ? 'dot_selected' : ''
                    ].join(' ')}>
                        <div className={'inner-dot'}>5</div>
                        <p className={'dot-name'}>{ data[4] && data[4].name }</p>
                    </div>
                </div>
                <div className={'circle__dot'}
                     onClick={() => props.setPeriod(6)}
                >
                    <div className={[
                        'dot',
                        props.period === 6 ? 'dot_selected' : ''
                    ].join(' ')}>
                        <div className={'inner-dot'}>6</div>
                        <p className={'dot-name'}>{ data[5] && data[5].name }</p>
                    </div>
                </div>
            </div>

            <div className={'circle-line_horizontal'}/>
            <div className={'circle-line_vertical'}/>
        </>
    )
}