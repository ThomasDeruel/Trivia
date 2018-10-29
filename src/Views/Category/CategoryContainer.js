import React, {Component} from "react";
import {withRouter} from "react-router-dom" // permet de récupérer les paramas de l'url;
import Category from './Category';

class CategoryContainer extends Component{
    render(){
        console.log(this.props);
        return(
            <Category
            categoryName={this.props.match.params.name}
            />
        );
    }
}
export default withRouter(CategoryContainer);