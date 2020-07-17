import React, { FC } from "react";
import Star from "./RatableStar";

export interface Props {
    value: number;
    starWidth?: number;
}

const StarRating: FC<Props> = ({ value, starWidth }) => {
    const width = starWidth || 16;

    return (
        <div>
            <Star value={value} width={width} />
            <Star value={value - 1} width={width} />
            <Star value={value - 2} width={width} />
            <Star value={value - 3} width={width} />
            <Star value={value - 4} width={width} />
        </div>
    );
};

export default StarRating;
