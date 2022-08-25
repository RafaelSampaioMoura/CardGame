import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor='carta'>
            Carta:{' '}
            <input
              name='nome'
              onChange={onInputChange}
              value={cardName}
              type='text'
              id='carta'
              data-testid='name-input'
            />
          </label>

          <label htmlFor='descrição'>
            Descrição:{' '}
            <textarea
              onChange={onInputChange}
              value={cardDescription}
              name='descrição'
              id='descrição'
              cols='30'
              rows='10'
              data-testid='description-input'
            />
          </label>

          <label htmlFor='atributoUm'>
            Primeiro Atributo:{' '}
            <input
              name='atributoUm'
              onChange={onInputChange}
              value={cardAttr1}
              type='number'
              data-testid='attr1-input'
              id='atributoUm'
              min='0'
              max='90'
            />
          </label>

          <label htmlFor='seg-atri'>
            Segundo Atributo:{' '}
            <input
              name='atributoDois'
              onChange={onInputChange}
              value={cardAttr2}
              type='number'
              data-testid='attr2-input'
              id='seg-atri'
              min='0'
              max='90'
            />
          </label>

          <label htmlFor='ter-atri'>
            Terceiro Atributo:{' '}
            <input
              name='atributoTres'
              onChange={onInputChange}
              value={cardAttr3}
              type='number'
              data-testid='attr3-input'
              id='ter-atri'
              min='0'
              max='90'
            />
          </label>

          <label htmlFor='imagem'>
            Imagem:{' '}
            <input
              name='imagem'
              onChange={onInputChange}
              value={cardImage}
              type='text'
              data-testid='image-input'
              id='imagem'
            />
          </label>

          <label htmlFor='raridade'>
            Raridade:{' '}
            <select
              name='raridade'
              onChange={onInputChange}
              value={cardRare}
              data-testid='rare-input'
              id='raridade'
            >
              <option value='normal'>Normal</option>
              <option value='raro'>Raro</option>
              <option value='muito raro'>Muito Raro</option>
            </select>
          </label>

          <label htmlFor='super-trunfo'>
            Super Trunfo:
            <input
              name='trunfo'
              onChange={onInputChange}
              checked={cardTrunfo}
              type='checkbox'
              data-testid='trunfo-input'
              id='super-trunfo'
            />
          </label>

          <button
            onClick={() =>
              onSaveButtonClick({
                cardName,
                cardDescription,
                cardAttr1,
                cardAttr2,
                cardAttr3,
                cardImage,
                cardRare,
                cardTrunfo,
              })
            }
            disabled={isSaveButtonDisabled}
            type='button'
            data-testid='save-button'
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
