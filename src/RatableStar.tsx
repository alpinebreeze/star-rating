import React, { FC } from "react";
import EmptyStar from "./EmptyStar";
import FullStar from "./FullStar";

export interface Props {
    width: number;
    value: number;
}

const RatableStar: FC<Props> = ({ width, value }) => {
    const fullStarValue = value <= 0 ? 0 : value >= 1 ? 100 : value * 100;

    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
                width: `${width}px`,
            }}
        >
            {fullStarValue >= 0 && fullStarValue < 100 && (
                <>
                    <EmptyStar
                        style={{
                            width: `${width}px`,
                            height: `${width}px`,
                        }}
                    />
                    {fullStarValue > 0 && (
                        <div
                            style={{
                                position: "absolute",
                                top: "0",
                                width: `${fullStarValue}%`,
                                overflow: "hidden",
                            }}
                        >
                            <FullStar
                                style={{
                                    width: `${width}px`,
                                    height: `${width}px`,
                                }}
                            />
                        </div>
                    )}
                </>
            )}
            {fullStarValue === 100 && (
                <FullStar
                    style={{
                        width: `${width}px`,
                        height: `${width}px`,
                    }}
                />
            )}
        </div>
    );
};

export default RatableStar;
