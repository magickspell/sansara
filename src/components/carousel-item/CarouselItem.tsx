import React from "react";

require('./carousel-item.scss')

interface propsI {
    year: number
    text: string
}

export const CarouselItem = (props: propsI) => {
    return (
        <div className={'main-page__carousel__body__item'}>
            <h4>
                {props.year}
            </h4>

            <p>
                {props.text}
            </p>
        </div>
    )
}