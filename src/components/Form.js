import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }
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

          <label htmlFor='pri-atri'>
            Primeiro Atributo:{' '}
            <input
              onChange={onInputChange}
              value={cardAttr1}
              type='number'
              data-testid='attr1-input'
              id='pri-atri'
            />
          </label>

          <label htmlFor='seg-atri'>
            Segundo Atributo:{' '}
            <input
              onChange={onInputChange}
              value={cardAttr2}
              type='number'
              data-testid='attr2-input'
              id='seg-atri'
            />
          </label>

          <label htmlFor='ter-atri'>
            Terceiro Atributo:{' '}
            <input
              onChange={onInputChange}
              value={cardAttr3}
              type='number'
              data-testid='attr3-input'
              id='ter-atri'
            />
          </label>

          <label htmlFor='imagem'>
            Imagem:{' '}
            <input
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
              onChange={onInputChange}
              checked={cardTrunfo}
              type='checkbox'
              data-testid='trunfo-input'
              id='super-trunfo'
            />
          </label>
          <button
            onClick={onSaveButtonClick}
            disabled={isSaveButtonDisabled}
            type='submit'
            data-testid='save-button'
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
