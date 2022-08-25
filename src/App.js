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
          onSaveButtonClick = {this.handleSubmit}
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
      </div>
    );
  }
}

export default App;
