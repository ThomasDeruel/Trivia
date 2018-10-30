import React, {Component} from "react";
import Home from './Home';
import api from '../../helpers/api.js';
class HomeContainer extends Component{
    state = {
        categories: [],
        isLoading:true,
    }
    async componentDidMount(){
        const data = await api.getCategories(10);
        this.setState({
            categories: data,
            isLoading:false,
        });
    }
    //methode qui va s'executer dès que la page se charge
    render(){
        return(
            <Home
            categories={this.state.categories}
            isLoading={this.state.isLoading}
            />
        );
    }
}
export default HomeContainer