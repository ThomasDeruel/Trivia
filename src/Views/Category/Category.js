import React from "react";
import PropTypes from 'prop-types';
const Category = ({categoryName}) =>(
    <section>
        <h1>Categories</h1>
        <p>{categoryName}</p>
    </section>
);
Category.PropTypes = {
    categoryName: PropTypes.string.isRequired,
};
export default Category;