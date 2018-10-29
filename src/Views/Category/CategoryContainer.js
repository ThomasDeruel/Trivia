import React, {Component} from "react";
import {withRouter} from "react-router-dom" // permet de récupérer les params de l'url;
import Category from './Category';

class CategoryContainer extends Component{
    render(){
        console.log(this.props);
        return(
            <Category
            categoryName={this.props.match.params.name}//permet de récupérer le paramètre 'name'
            />
            
        );
    }
}
export default withRouter(CategoryContainer);//permet d'accéder aux propriétés de notre Router principale