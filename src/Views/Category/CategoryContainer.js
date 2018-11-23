import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';
import storage from '../../helpers/storage';
class CategoryContainer extends Component {
  state = {
    category: null,
    currentQuestion: null,
    life:3,
  }

  // createRef in order to bring back input value to its parent
  answerInput = createRef();

  // async needed when using promise
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    // stored response in the state;
    this.setState({
      category: data,
      currentQuestion: storage.getQuestion(this.props.match.params.id)
    });
  }

  goodAnswer(){
    const length = this.state.category.clues.length-1;
    let {currentQuestion} = this.state;
    currentQuestion === length ? currentQuestion = 0 : currentQuestion += 1;
    this.setState({currentQuestion}) 
    storage.setQuestion(this.state.currentQuestion,this.props.match.params.id)
  }
  badAnswer(){
    console.log("mauvais réponse")
    let {life} = this.state;
    life--;
    this.setState({life})
    if(life === 0){
        console.log('t\'as perdu');
    }
  }
  handleSubmit = (e) => {
    // here I prevent de fault bh of submitting form
    e.preventDefault();
    const true_answer = this.state.category.clues[this.state.currentQuestion].answer;
    const answer = this.answerInput.current.value;
    true_answer === answer ?
    this.goodAnswer() :
    this.badAnswer();
    console.log('la réponse est: '+true_answer);
    //console.log(answer);
    //this.increment()
  }

  render() {
    const { category, currentQuestion } = this.state;
    // at first render, category will be null so we need to wait
    // before using data.
    if (!category) return <div>is loading</div>
    return (
      <Category
        category={category}
        currentQuestionIndex={currentQuestion}
        handleSubmit={this.handleSubmit}
        answerInput={this.answerInput} // plug createRef to chidlren
      />
    );
  }
}

export default CategoryContainer;