import React, {useEffect, useRef} from "react";
import {CarouselItem} from "../../components/carousel-item/CarouselItem";
import {db} from "../../app/data/mock-data";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

require('./carousel.scss')

interface propsI {
    period: number
    periods: number
    periodMinus: () => void
    periodPlus: () => void
}

export const Carousel = (props: propsI) => {

    const data = db.data;

    /* animation with add remove class (keyframe) !!didnot work on fast updates*/
    useEffect(() => {
        document.getElementsByClassName('swiper')[0].classList.add('swiper_invisible')
        setTimeout(() => {
            document.getElementsByClassName('swiper')[0].classList.remove('swiper_invisible')
        }, 500)
        return () => {}
    }, [props.period])

    return (
        <div className={'main-page__carousel'}>

            <div className={'main-page__carousel__head'}>
                <div className={'main-page__carousel__head__indexes'}>
                    0{props.period} / 0{props.periods}
                </div>
                <div className={'main-page__carousel__head__btn'}>
                    <button
                        style={(props.period === 1) ? {color: 'lightgray'} : {color: ''}}
                        onClick={() => {
                            props.periodMinus()
                        }}
                    >
                        &#8630;
                    </button>
                    <button
                        style={(props.period === props.periods) ? {color: 'lightgray'} : {color: ''}}
                        onClick={() => {
                            props.periodPlus()
                        }}
                    >
                        &#8631;
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                className={[
                    'swiper',
                    'swiper_invisible'
                ].join(' ')}
            >
                {
                    data[props.period - 1].body.data.map((i, n) => {
                        return (
                            <SwiperSlide key={`swipe-${n}`}>
                                <CarouselItem
                                    key={`item-${n}`}
                                    text={i.text}
                                    year={i.year}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={2}
                navigation
                watchSlidesProgress
                pagination={{ clickable: true }}
                className={[
                    'swiper',
                    'swiper_invisible',
                    'swiper_mobile'
                ].join(' ')}
            >
                {
                    data[props.period - 1].body.data.map((i, n) => {
                        return (
                            <SwiperSlide key={`swipe-mobile-${n}`}>
                                <CarouselItem
                                    key={`item-mobile-${n}`}
                                    text={i.text}
                                    year={i.year}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}