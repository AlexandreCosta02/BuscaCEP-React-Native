import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

export default class App extends Component{
  
    state = {
      cep: '',
      dados: {
        localidade:''
      }
    };

  buscarCep = () =>{
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`).then(res => res.json()).then(data => {
      this.setState({
        dados: data
      })
    }).catch(err => {console.log(err)});
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.imgLogo}
          source={require('./Imagens/buscacep.png')}
        />
        <Text style={styles.text}>
          Digite o CEP abaixo:
        </Text>
        <TextInput style={styles.input}
          value={this.state.cep}
          onChangeText = {cep => {this.setState({cep})}}
          placeholder='Digite o CEP aqui:'
          placeholderTextColor='#c3c3c3c3'
        />
        
          <TouchableOpacity
            style={styles.button}
            onPress={this.buscarCep}
          >
          <Text>
            Buscar CEP
          </Text>
          </TouchableOpacity>
        
        <View>
          <Text style={styles.txtCidade}>
            Cidade: {this.state.dados.localidade}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFF0'
  },
  imgLogo:{
    height: 100,
    width: 220
  },
  text:{
    fontSize: 20,
    color: 'darkgreen',
    fontWeight: 'bold',
    marginTop: 10
  },
  input:{
    borderWidth: 2,
    borderColor:'darkgreen',
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  button:{
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'darkgreen',
    backgroundColor: "lightgreen",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  txtCidade:{
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 25, 
    color: 'darkgreen'
  }
});