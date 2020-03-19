import React, { Component } from 'react';

import axios from 'axios';
import Itens from './itens'
import {
    ScrollView, 
    View, 
    Text,
    StyleSheet
 } from 'react-native';

const styles = StyleSheet.create({
  styleView:{
    backgroundColor: '#ddd'
  }
})



export default class ListaItens extends Component {

 

  constructor(props){
    super(props);

    this.state = {ListaItens: []}
  }

  componentDidMount() {
    const url = 'https://cors-anywhere.herokuapp.com/http://faus.com.br/recursos/c/dmairr/api/itens.html';
     axios.get(url)
     .then(res => {this.setState({ListaItens : res.data})})
     .catch(()=>{console.log('Erro ao recuperar os dados')})
    

  }

  render() {
    return (
      <ScrollView style={styles.styleView}>
       {this.state.ListaItens.map(item => (<Itens key={item.titulo} item={item} />))}

      </ScrollView>
    );
  }
}
   