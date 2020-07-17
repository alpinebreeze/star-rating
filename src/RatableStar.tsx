import React, { FC } from "react";
import EmptyStar from "./EmptyStar";
import FullStar from "./FullStar";
import styles from "./RatableStar.module.css";

export interface Props {
    width: number;
    value: number;
}

const RatableStar: FC<Props> = ({ width, value }) => {
    const fullStarWidth = value <= 0 ? 0 : value >= 1 ? 100 : value * 100;

    return (
        <div className={styles.ratableStar} style={{ width: `${width}px` }}>
            {fullStarWidth >= 0 && fullStarWidth < 100 && (
                <>
                    <EmptyStar />
                    {fullStarWidth > 0 && (
                        <div
                            className={styles.partialStar}
                            style={{
                                width: `${fullStarWidth}%`,
                            }}
                        >
                            <FullStar style={{ width: `${width}px` }} />
                        </div>
                    )}
                </>
            )}
            {fullStarWidth === 100 && <FullStar />}
        </div>
    );
};

export default RatableStar;
