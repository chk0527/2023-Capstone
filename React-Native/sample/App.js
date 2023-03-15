import React, { Component } from "react";
import { Button, View, Alert,Text,TextInput,StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }
  state = {
    text: '',
    inputText: ''
  }

 
  submitBtn = () => {
    this.setState({text: this.state.inputText});
  }

  onStateChange = (state) => {
    if (state === "ended") {
      this.setState({ playing: false });
      Alert.alert("video has finished playing!");
    }
  };

  togglePlaying = () => {
    this.setState((prevState) => ({ playing: !prevState.playing }));
  };

  render() {
    const { playing } = this.state;

    return (
      <View>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={this.state.text} //nNyS4srTrn4, dSy0mvQDlug  --youtube id 예시
          onChangeState={this.onStateChange}
        />
        <Button
          title={playing ? "pause" : "play"}
          onPress={this.togglePlaying}
        />
        <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="아무거나 입력해주세요."
          />
          <Button title="제출" onPress = {this.submitBtn} />
          <Text style = {styles.showText}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  showText: {
    marginTop: 10,
    fontSize: 25,
  }
})