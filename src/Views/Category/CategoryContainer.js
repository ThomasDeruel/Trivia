import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: null,
    currentQuestion: 0,
  }

  // createRef in order to bring back input value to its parent
  answerInput = createRef();

  // async needed when using promise
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    // stored response in the state;
    this.setState({
      category: data,
    });
  }
  increment(){
      this.setState({
        currentQuestion: this.state.currentQuestion+=1
      })
  }
  handleSubmit = (e) => {
    // here I prevent de fault bh of submitting form
    e.preventDefault();
    const answer = this.answerInput.current.value;
    console.log(answer);
    this.increment()
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