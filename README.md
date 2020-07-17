# star-rating
A simple component that represents a rating visually using empty and full stars. It is designed to try and represent the rating as accurately as possible.

This approach uses 2 svgs: an empty and a full star. When there is a star that is partially full the component renders both the empty star and full star on top of each other. A percentage of the full star is then hidden based on the decimal value of the rating.

## Install
`npm i`

## Run
`npm run storybook`