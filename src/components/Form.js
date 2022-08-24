import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor='carta'>
            Carta: <input type='text' id='carta' data-testid='name-input' />
          </label>

          <label htmlFor='descrição'>
            Descrição:{' '}
            <textarea
              name='descrição'
              id='descrição'
              cols='30'
              rows='10'
              data-testid='description-input'
            />
          </label>

          <label htmlFor='pri-atri'>
            Primeiro Atributo:{' '}
            <input type='number' data-testid='attr1-input' id='pri-atri' />
          </label>

          <label htmlFor='seg-atri'>
            Segundo Atributo:{' '}
            <input type='number' data-testid='attr2-input' id='seg-atri' />
          </label>

          <label htmlFor='ter-atri'>
            Terceiro Atributo:{' '}
            <input type='number' data-testid='attr3-input' id='ter-atri' />
          </label>

          <label htmlFor='imagem'>
            Imagem: <input type='file' data-testid='image-input' id='imagem' />
          </label>

          <label htmlFor='raridade'>
            Raridade:{' '}
            <select data-testid='rare-input' id='raridade'>
              <option value='normal'>Normal</option>
              <option value='raro'>Raro</option>
              <option value='muito raro'>Muito Raro</option>
            </select>
          </label>

          <label htmlFor='super-trunfo'>
            Super Trunfo:
            <input
              type='checkbox'
              data-testid='trunfo-input'
              id='super-trunfo'
            />
          </label>
          <button type='submit' data-testid='save-button'>
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
