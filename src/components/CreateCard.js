import React, { Component } from 'react';

class createCard extends Component {
  state = {
    title: '',
    description: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  get isValid() {
    const { title, description } = this.state;
    return title && description;
  }

  get isInvalid() {
    return !this.isValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isInvalid) return;

    const { createCard, listId } = this.props;

    if (createCard) {
      createCard(listId ,this.state);
    }

    this.setState({
      title: '',
      description: '',
    });
  };

  render() {
    const { title, description } = this.state;

    return (
      <form className="createCard" onSubmit={this.handleSubmit}>
        <input
          className="createCard-title"
          onChange={this.handleChange}
          name="title"
          placeholder="Title"
          type="text"
          value={title}
        />
        <input
          className="createCard-description"
          onChange={this.handleChange}
          placeholder="Description"
          name="description"
          type="text"
          value={description}
        />
        <input
          className="createCard-submit"
          type="submit"
          value="Create New Card"
          disabled={this.isInvalid}
        />
      </form>
    );
  }
}

export default createCard;
