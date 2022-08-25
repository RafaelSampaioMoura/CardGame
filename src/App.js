import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      nome: '',
      descrição: '',
      atributoUm: 0,
      atributoDois: 0,
      atributoTres: 0,
      imagem: '',
      raridade: '',
      trunfo: false,
      temTrunfo: false,
      formValid: true,
      savedCards: [],
      hasCards: false,
    };
  }

  handleSubmit(values) {
    const { trunfo, temTrunfo } = this.state;

    if (trunfo && !temTrunfo) {
      this.setState({
        temTrunfo: true,
        trunfo: false,
      });
    }

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
          hasCards: true,
        });
      },
    );
  }

  handleDelete(carta) {
    if (carta.cardTrunfo) {
      this.setState({
        temTrunfo: false,
      });

      this.setState((prevState) => ({
        savedCards: prevState.savedCards.filter(
          (card) => card.cardName !== carta.cardName,
        ),
      }));
    }
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
        const minValue = 0;
        const maxValue = 90;
        const maxSum = 210;
        if (
          nome
          && descrição
          && atributoUm >= minValue
          && atributoUm <= maxValue
          && atributoDois >= minValue
          && atributoDois <= maxValue
          && atributoTres >= minValue
          && atributoTres <= maxValue
          && attSum <= maxSum
          && raridade
          && imagem
        ) {
          this.setState({
            formValid: false,
          });
        } else {
          this.setState({
            formValid: true,
          });
        }
      },
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
      temTrunfo,
      hasCards,
      savedCards,
    } = this.state;

    return (
      <div>
        {/* <pre>{JSON.stringify(this.state, undefined, 2)}</pre> */}
        <h1>Tryunfo</h1>
        <Form
          cardName={ nome }
          cardDescription={ descrição }
          cardAttr1={ atributoUm }
          cardAttr2={ atributoDois }
          cardAttr3={ atributoTres }
          cardImage={ imagem }
          cardRare={ raridade }
          cardTrunfo={ trunfo }
          hasTrunfo={ temTrunfo }
          isSaveButtonDisabled={ formValid }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSubmit }
        />
        <Card
          cardName={ nome }
          cardDescription={ descrição }
          cardAttr1={ atributoUm }
          cardAttr2={ atributoDois }
          cardAttr3={ atributoTres }
          cardImage={ imagem }
          cardRare={ raridade }
          cardTrunfo={ trunfo }
        />
        <h1>Cartas Salvas</h1>
        {hasCards && (
          <div>
            {savedCards.map((card) => (
              <div key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.handleDelete(card) }
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
