import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';

import CardKucing from './components/CardKucing.js';

import yolo from './gambar.jpg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // It is not dash (-) it is equal (=)

    // this.state = {
    //   profile : {
    //     name: "ibrahim",
    //     age: "25",
    //   },
    //
    // }

    this.state = {
      name: "",
      password: "",
    }
  }


  _click = () => {
    Alert.alert(this.state.name, this.state.password);
    console.log("CREST JOHOR Challense");
  }
  //List of cat images
  //http://1.bp.blogspot.com/--Z6fw6sHPTo/UUDKtEK-XXI/AAAAAAAAFp0/LzaCN5_265M/s640/A-Box-Of-CATS.jpg
  //https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg

  render() {
    return (
      <View style={styles.bwhskit}>
      <ScrollView style={styles.container}>

        <CardKucing name="Si montel" age="1 tahun" image="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"/>
        <CardKucing name="Si Merah" age="2 tahun" image="http://1.bp.blogspot.com/--Z6fw6sHPTo/UUDKtEK-XXI/AAAAAAAAFp0/LzaCN5_265M/s640/A-Box-Of-CATS.jpg"/>
        <CardKucing name="Aziz" age="3 tahun" image="https://cdn.cnn.com/cnnnext/dam/assets/180521124904-01-donald-trump-0517-super-tease.jpg"/>
        <CardKucing name="Malaysia" age="60 tahun" image={yolo}/>




      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',

    backgroundColor: "#ffffff",
    //backgroundColor: 'rgba(0, 255, 255, 0.5)',

  },
  bwhskit: {
    paddingTop: Constants.statusBarHeight,
  },
  card: {
    borderWidth: 1,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
  },
  rowforbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

/*
<View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>

  <TextInput style={{width: 150, height: 40, borderColor: 'gray', borderWidth: 1}}
  onChangeText={ (name) => this.setState({name})}
  value={this.state.name} placeholder="Email" />

  <Text>My name is {this.state.name}</Text>

  <TextInput style={{width: 150, height: 40, borderColor: 'gray', borderWidth: 1}}
  onChangeText={ (password) => this.setState({password})}
  value={this.state.password} secureTextEntry={true} placeholder="Password" />

  <Text>My name is {this.state.password}</Text>

  <Button title="Press Me!" onPress={this._click}/>

</View>
*/
