class Api{
    /*getCategoryById(id){
        Storage.saveItem(response);
    }*/
    getCategories(count){
        fetch(`http://jservice.io/api/categories?count=${count}`).then(response=>{
            response.json().then(categories=>{
                this.setState({
                    categories: categories,
                    isLoading: false,
                })
            })
        })
    }
}
export default Api;