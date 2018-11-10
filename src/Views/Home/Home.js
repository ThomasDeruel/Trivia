import React from "react";
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
const Home = ({categories,isLoading}) =>(
    <section>
        <h1>Home</h1>
        {!isLoading ?
            <ul>
            {categories.map(categorie=>(
                <li key={categorie.id.toString()}>
                    <Link to={`/categories/${categorie.id}`} >
                        {categorie.title}
                    </Link>
                </li>    
            ))}
            </ul>
         : <h1>Ca Charge</h1>   
        }
    </section>
);
Home.propTypes = {
    categories: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            clues_count: propTypes.number.isRequired,
        }).isRequired,
    ),
    isLoading: propTypes.bool.isRequired,
}
export default Home;