import React from "react";
import StarRating from ".";
import { withKnobs, number } from "@storybook/addon-knobs";
import { NumberTypeKnobOptions } from "@storybook/addon-knobs/dist/components/types";

export default {
    title: "Star Rating",
    decorators: [withKnobs],
};

const options: NumberTypeKnobOptions = {
    range: true,
    min: 0,
    max: 5,
    step: 0.01,
};

export const component = (): JSX.Element => (
    <StarRating
        value={number("Rating", 2.5, options)}
        starWidth={number("Star Width", 64)}
    />
);
