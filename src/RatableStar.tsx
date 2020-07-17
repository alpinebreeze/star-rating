import React from "react";
import EmptyStar from "./EmptyStar";
import FullStar from "./FullStar";

export interface Props {
    width: number;
    value: number;
}

export default function RatableStar(props: Props): JSX.Element {
    const { width, value } = props;
    const fullStarValue =
        props.value <= 0 ? 0 : props.value >= 1 ? 100 : value * 100;

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
}
