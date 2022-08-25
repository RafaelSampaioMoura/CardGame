import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      nome: '',
      descrição: '',
      atributoUm: '',
      atributoDois: '',
      atributoTres: '',
      imagem: '',
      raridade: '',
      trunfo: false,
      formValid: false,
      savedCards: [],
      hasCards: false,
    };
  }

  handleSubmit(values) {
    this.setState(
      (prevState) => ({
        savedCards: [...prevState.savedCards, values],
      }),
      () => {
        this.setState({
          nome: '',
          descrição: '',
          atributoUm: '0',
          atributoDois: '0',
          atributoTres: '0',
          imagem: '',
          raridade: '',
          trunfo: false,
          hasCards: true,
        });
      }
    );
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      nome,
      descrição,
      atributoUm,
      atributoDois,
      atributoTres,
      imagem,
      raridade,
      trunfo,
    } = this.state;

    return (
      <div>
        {/* <pre>{JSON.stringify(this.state, undefined, 2)}</pre> */}
        <h1>Tryunfo</h1>
        <Form
          cardName={nome}
          cardDescription={descrição}
          cardAttr1={atributoUm}
          cardAttr2={atributoDois}
          cardAttr3={atributoTres}
          cardImage={imagem}
          cardRare={raridade}
          cardTrunfo={trunfo}
          onInputChange={this.handleChange}
          onSaveButtonClick={this.handleSubmit}
        />
        <Card
          cardName={nome}
          cardDescription={descrição}
          cardAttr1={atributoUm}
          cardAttr2={atributoDois}
          cardAttr3={atributoTres}
          cardImage={imagem}
          cardRare={raridade}
          cardTrunfo={trunfo}
        />
        {this.state.hasCards && (
          <div>
            <h1>Cartas Salvas</h1>
            {this.state.savedCards.map((card) => {
              return (
                <Card
                  key={card.cardName}
                  cardName={card.cardName}
                  cardDescription={card.cardDescription}
                  cardAttr1={card.cardAttr1}
                  cardAttr2={card.cardAttr2}
                  cardAttr3={card.cardAttr3}
                  cardImage={card.cardImage}
                  cardRare={card.cardRare}
                  cardTrunfo={card.cardTrunfo}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
