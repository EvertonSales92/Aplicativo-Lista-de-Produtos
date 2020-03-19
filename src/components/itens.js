import React, { Component } from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  item:{

    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor:'#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto:{
    width: 102,
    height: 102
  },
  detalheItens:{
    marginLeft: 20,
    flex: 1
  },
  txtProduto:{
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  txtValor:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  txtdetalhes:{
    fontSize: 16
  }

})
export default class Itens extends Component {
  render() {
    return (
      <View style={styles.item}> 
        <View style={styles.foto}>
            <Image style={{height: 100, width: 100}} source={{uri: this.props.item.foto}} />
        </View>
        <View style={styles.detalheItens}>
           <Text style={styles.txtProduto}>{this.props.item.titulo}</Text>
          <Text style={styles.txtValor}>R$ {this.props.item.valor}</Text>
          <Text style={styles.txtdetalhes}>Local: {this.props.item.local_anuncio}</Text>
          <Text>Data: {this.props.item.data_publicacao}</Text>
        </View>
       
      </View>
    );
  }
}
