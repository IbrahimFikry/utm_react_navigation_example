import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';


export default class CardKucing extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }


  _like = () => {
    Alert.alert("Like", "You have like this post! of " + this.props.name)
  }
  _comment = () => {
    Alert.alert("Comment", "You are commenting this post")
  }
  _share = () => {
    Alert.alert("Share", "Share it with your friends")
  }

  render() {
    return(
      <View style={styles.card}>

        <View style={styles.row}>
          <Image style={{width: 100, height:100}} source={this.props.image} />

          <View>
            <Text>Name: {this.props.name}</Text>
            <Text>Age: {this.props.age}</Text>
            <Text>Hobby: Makan Ikan</Text>
          </View>

        </View>

        <View style={styles.rowforbutton}>
          <Button title="Like" onPress={this._like}/>
          <Button title="Comment" onPress={this._comment}/>
          <Button title="Share" onPress={this._share}/>
        </View>

      </View>
    )
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
