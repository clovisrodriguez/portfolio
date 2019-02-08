import React, { Component } from 'react';
import './styles/main.scss';
import { IntlProvider, addLocaleData } from 'react-intl';
import LandingPage from './components/landingPage';
import locale_es from 'react-intl/locale-data/es';
import locale_en from 'react-intl/locale-data/pt';
import message_es from './assets/i18n/es';
import message_en from './assets/i18n/en';

addLocaleData([...locale_es, ...locale_en]);

const messages = { es: message_es, en: message_en };

class App extends Component {
  constructor(props) {
    super(props);
    this.changeLan = this.changeLan.bind(this);
    this.state = {
      language: navigator.language.replace(/[^a-z]/g, '') === 'es' ? 'es' : 'en'
    };
  }

  changeLan() {
    this.state.language === 'es'
      ? this.setState({ language: 'en' })
      : this.setState({ language: 'es' });
  }

  render() {
    return (
      <IntlProvider
        locale={this.state.language}
        messages={messages[this.state.language]}
      >
        <LandingPage changeLan={this.changeLan} />
      </IntlProvider>
    );
  }
}

export default App;
