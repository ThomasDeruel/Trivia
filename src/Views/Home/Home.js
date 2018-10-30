import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Home = ({categories,isLoading}) =>(
    <section>
        <h1>Home</h1>
        {!isLoading ?
            categories.map(categorie=>(
                <ul>
                    <li><Link to={`/categories/${categorie.id}`} key={categorie.id}>
                        {categorie.title}
                    </Link>
                    </li>
                </ul>
            ))
         : <h1>Ca Charge</h1>   
        }
    </section>
);
Home.PropTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            clues_count: PropTypes.number.isRequired,
        }).isRequired,
    ),
    isLoading: PropTypes.bool.isRequired,
}
export default Home;