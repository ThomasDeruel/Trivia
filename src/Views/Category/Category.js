import React from "react";
import { PropTypes } from 'prop-types';

const Category = ({categoryName,isLoading}) =>(
    <section>
    {!isLoading ?(
     <div>
        <h1>Categories</h1>
        <p>{categoryName.title}</p>
     </div>
    )
    : <h1>Ca charge</h1>
    }

    </section>
);
Category.PropTypes = {
    categoryName: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
export default Category;