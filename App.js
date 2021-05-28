import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      activeUsername: false,
      activeEmail: false,
      showSuccess: false,
      showFail: false,
    };
  }

  onFocusUsername = (username) => {
    this.setState({ activeUsername: true });
    this.setState({ activeEmail: false });
  };

  onFocusEmail = (email) => {
    this.setState({ activeEmail: true });
    this.setState({ activeUsername: false });
  };

  onSubmit = () => {
    if (this.state.username != '' || this.state.email != '') {
      this.setState({ username: '' });
      this.setState({ email: '' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onFocus={this.onFocusUsername}
          onChangeText={(username) => this.setState({ username: username })}
          style={[
            styles.TextInput,
            { borderColor: this.state.activeUsername ? '#ff5555' : '#e9eef5' },
          ]}
          placeholder="Username"
        />

        <TextInput
          value={this.state.email}
          onFocus={this.onFocusEmail}
          onChangeText={(email) => this.setState({ email: email })}
          style={[
            styles.TextInput,
            { borderColor: this.state.activeEmail ? '#ff5555' : '#e9eef5' },
          ]}
          keyboardType="email-address"
          placeholder="Email"
        />

        <TouchableOpacity onPress={() => this.onSubmit()} style={styles.Button}>
          <Text style={{ color: '#fff' }}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: WIDTH * 0.1,
    paddingLeft: WIDTH * 0.1,
    backgroundColor: 'white',
  },
  TextInput: {
    backgroundColor: '#e9eef5',
    width: WIDTH * 0.8,
    height: 40,
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
    borderWidth: 2,
  },
  Button: {
    backgroundColor: '#ff5555',
    width: WIDTH * 0.8,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default App;
