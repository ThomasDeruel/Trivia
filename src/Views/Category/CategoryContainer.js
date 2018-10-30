import React, {Component} from "react";
import api from '../../helpers/api'
import Category from './Category';
import {withRouter} from "react-router-dom" // permet de récupérer les params de l'url;

class CategoryContainer extends Component{
    state = {
        categoryName: {},
        isLoading:true,
    }
    async componentDidMount(){
        const data = await api.getCategoryById(this.props.match.params.name);
        this.setState({
            categoryName : data,
            isLoading: false,
        });
    }
    render(){
        console.log(this.state.isLoading)
        return(
            <Category
            categoryName={this.state.categoryName}//permet de récupérer le paramètre 'name'
            isLoading={this.state.isLoading}
            />
            
        );
    }
}
export default withRouter(CategoryContainer);//permet d'accéder aux propriétés de notre Router principale