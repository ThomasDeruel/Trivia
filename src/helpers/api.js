class api{
    async getCategories(count){
        const categories = await fetch(`http://jservice.io/api/categories?count=${count}`); //retourne une promesse
        const json = await categories.json(); // retourne json
        return json;
    }
    async getCategoryById(id){
        const category = await fetch(`http://jservice.io/api/category?id=${id}`); //retourne une promesse
        const json = await category.json(); // retourne json
        return json;
    }
}
export default new api();