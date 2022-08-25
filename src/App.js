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
      atributoUm: 0,
      atributoDois: 0,
      atributoTres: 0,
      imagem: '',
      raridade: '',
      trunfo: false,
      formValid: true,
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
          atributoUm: 0,
          atributoDois: 0,
          atributoTres: 0,
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

    this.setState(
      {
        [name]: value,
      },
      () => {
        const {
          nome,
          descrição,
          imagem,
          raridade,
          atributoUm,
          atributoDois,
          atributoTres,
        } = this.state;

        const attSum = Number(atributoUm) + Number(atributoDois) + Number(atributoTres);

        if (
          nome &&
          descrição &&
          atributoUm >= 0 &&
          atributoUm <= 90 &&
          atributoDois >= 0 &&
          atributoDois <= 90 &&
          atributoTres >= 0 &&
          atributoTres <= 90 &&
          attSum <= 210 &&
          raridade &&
          imagem
        ) {
          this.setState({
            formValid: false,
          });
        } else {
          this.setState({
            formValid: true,
          });
        }
      }
    );
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
      formValid,
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
          isSaveButtonDisabled={formValid}
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
                <div key={card.cardName}>
                  <Card
                    cardName={card.cardName}
                    cardDescription={card.cardDescription}
                    cardAttr1={card.cardAttr1}
                    cardAttr2={card.cardAttr2}
                    cardAttr3={card.cardAttr3}
                    cardImage={card.cardImage}
                    cardRare={card.cardRare}
                    cardTrunfo={card.cardTrunfo}
                  />
                  <button onClick={() => {}}>Remover Carta</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
