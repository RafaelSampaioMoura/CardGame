import React, { Component } from 'react';

export class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <h1 data-testid='name-card'>{cardName}</h1>
        <img data-testid='image-card' src={cardImage} alt={cardName} />
        <p data-testid='description-card'>{cardDescription}</p>
        <p data-testid='attr1-card'>{cardAttr1}</p>
        <p data-testid='attr2-card'>{cardAttr2}</p>
        <p data-testid='attr3-card'>{cardAttr3}</p>
        <p data-testid='rare-card'>{cardRare}</p>
        {cardTrunfo && <p data-testid='trunfo-card'>Super Trunfo</p>}
      </div>
    );
  }
}

export default Card;
