import React, {Component} from "react";
import {withRouter} from "react-router-dom" // permet de récupérer les params de l'url;
import Category from './Category';

class CategoryContainer extends Component{
    state = {
        categoryName: {},
        isLoading:true,
        error:false,
    }
    componentDidMount(){
        //dans api js : api.getCategoryById(this.props.match.params.name)
        fetch(`http://jservice.io/api/category?id=${this.props.match.params.name}`).then(response=>{
            response.json().then(categoryName=>{
                this.setState({
                    categoryName: categoryName,
                    isLoading: false
                })
            })
        }).catch(error=>{
            this.setState({
                error: error,
            })
        })
    }
    render(){
        console.log(this.state.error)
        return(
            <Category
            categoryName={this.state.categoryName}//permet de récupérer le paramètre 'name'
            isLoading={this.state.isLoading}
            />
            
        );
    }
}
export default withRouter(CategoryContainer);//permet d'accéder aux propriétés de notre Router principale