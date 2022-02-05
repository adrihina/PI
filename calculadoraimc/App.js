/**
 * App para calcular letra del DNI
 */

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { calcularIMG } from './Components/utils'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altura: '',
      peso: '',
      resultado: '',
      font: ''
    };
  }
  

  actualizaAltura = (laAltura) => {
    this.setState({ altura: laAltura });
  }

  actualizaFont = (font) => {
    this.setState({ font: font });
  }

  actualizaPeso = (elPeso) => {
    this.setState({ peso: elPeso });
  }

  actualizaResultado = (resultado) => {
    this.setState({ resultado: resultado });
  }

  resultadoIMG = (altura, peso) => {

    let final = calcularIMG(altura, peso);
    final = Math.round((final + Number.EPSILON) * 100) / 100;
    if (final < 18.5) {
      this.actualizaResultado("Peso Insuficiente");
    } else if (final > 18.5 && final < 24.9) {
      this.actualizaResultado("Normopeso");
    } else if (final > 25 && final < 26.9) {
      this.actualizaResultado("Sobrepeso grado I");
    } else if (final > 27 && final < 29.9) {
      this.actualizaResultado("Sobrepeso grado II (preobesidad)");
    } else if (final > 30 && final < 34.9) {
      this.actualizaResultado("Obesidad de tipo I");
    } else if (final > 35 && final < 39.9) {
      this.actualizaResultado("Obesidad de tipo II");
    } else if (final > 40 && final < 49.9) {
      this.actualizaResultado("Obesidad de tipo III (Morbida)");
    } else {
      this.actualizaResultado("Obesidad de tipo IV");
    }

    if(final < 27){
      this.actualizaFont(styles.texto1)
    }else if(final >= 27 && final <= 39.9){
      this.actualizaFont(styles.texto2)
    }else{
      this.actualizaFont(styles.texto3)
    }
  }

  render() {
    return (
      <View>
        <View>
          <Text>CALCULADORA IMG</Text>
          <Text>Altura:</Text>
          <TextInput
          onChangeText={this.actualizaAltura}
            value={this.state.altura}
            placeholder="Escribe tu altura en CM"
            keyboardType='numeric'
            underlineColorAndroid="blue"
          ></TextInput>
          <Text>Peso:</Text>
          <TextInput
          onChangeText={this.actualizaPeso}
            value={this.state.peso}
            placeholder='Escribe tu peso en KG'
            keyboardType='numeric'
            underlineColorAndroid="blue"></TextInput>
          <Button
            title='Calcular IMG'
            onPress={() => this.resultadoIMG(this.state.altura, this.state.peso)}
          />
          <Text>Resultado:</Text>
          <Text style={this.state.font}>{this.state.resultado}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  texto1: {
    color: 'green'
  },
  texto2: {
    color: 'orange'
  },
  texto3: {
    color: 'red'
  }
});

export default App;