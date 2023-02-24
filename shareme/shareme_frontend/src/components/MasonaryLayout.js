import React from "react";
import Masonary from "react-masonry-css";

import Pin from './Pin'

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1100: 3,
  700: 2,
  500: 1,
};
const MasonaryLayout = ({pins}) => {
    console.log(pins,"helo")
  //...
  return (
    <Masonary
      breakpointCols={breakpointColumnsObj}
      className="flex animate-slide-fwd"
      columnClassName="my-masonry-grid_column"
    >
        {pins?.map((pin)=>
            <Pin key={pin._id} pin={pin} className='w-max' />
        )}
    </Masonary>
  );
};

export default MasonaryLayout;
