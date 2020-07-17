import React, { FC } from "react";
import EmptyStar from "./EmptyStar";
import FullStar from "./FullStar";
import styles from "./RatableStar.module.css";

export interface Props {
    width: number;
    value: number;
}

const RatableStar: FC<Props> = ({ width, value }) => {
    const fullStarValue = value <= 0 ? 0 : value >= 1 ? 100 : value * 100;

    return (
        <div
            className={styles.ratableStar}
            style={{
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
                            className={styles.partialStar}
                            style={{
                                width: `${fullStarValue}%`,
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
