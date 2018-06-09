import React, { Component } from "react";
import getTheme from './native-base-theme/components';
import common from './native-base-theme/variables/commonColor';
import {
  StyleProvider,
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Radio,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import { Image } from 'react-native';

const styles = {
  container: {
    backgroundColor: "#fff"
  },
  radio:{
    marginRight:10
  }
};
const paytm = require("./assets/150x50.png");

class NHRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true,
      radio5: false,
      radio6: false,
      loading: true
    };

  }
  // componentWillMount() {
  //   this.loadFonts();
  // }
  // async loadFonts() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
  //    ,Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  //   });
  //   this.setState({ loading: false });

  // }
  toggleRadio1() {
    this.setState({
      radio1: true,
      radio2: false,
      radio3: false,
      radio4: false,
      radio5: false,
      radio6: false
    });
  }
  toggleRadio2() {
    this.setState({
      radio1: false,
      radio2: true,
      radio3: false,
      radio4: false,
      radio5: false,
      radio6: false
    });
  }
  toggleRadio3() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: true,
      radio4: false,
      radio5: false,
      radio6: false
    });
  }
  toggleRadio4() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true,
      radio5: false,
      radio6: false
    });
  }
  toggleRadio5() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: false,
      radio5: true,
      radio6: false
    });
  }
  toggleRadio6() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: false,
      radio5: false,
      radio6: true
    });
  }
  render() {
    // if (this.state.loading) {
    //   return <Expo.AppLoading />;
    // }
    return (
      <StyleProvider style={getTheme(common)}>
      <Container style={styles.container}>
        <Content>
        <ListItem itemHeader style={{paddingTop:28,height:15}}>
          <Image source={paytm} style={{height: 20, width: 64}}/>
          </ListItem>
        <ListItem itemHeader style={{backgroundColor:"#f3f7f8",height:15,paddingTop:28}}>
            <Text style={{color:'#000'}}>Select an option to pay</Text>
          </ListItem>
          <ListItem
            selected={this.state.radio1}
            onPress={() => this.toggleRadio1()}
          >
              <Radio style={styles.radio}
                selected={this.state.radio1}
                onPress={() => this.toggleRadio1()}
              />
              <Text >Paytm Payments Bank</Text>
            
          </ListItem>
          <ListItem
            selected={this.state.radio2}
            onPress={() => this.toggleRadio2()}
          >
            <Radio style={styles.radio}
                selected={this.state.radio2}
                onPress={() => this.toggleRadio2()}
              />
              <Text>Paytm Postpaid</Text>
            
          </ListItem>
          <ListItem
            selected={this.state.radio3}
            onPress={() => this.toggleRadio3()}
          >
            <Radio style={styles.radio}
                selected={this.state.radio3}
                onPress={() => this.toggleRadio3()}
              />
              <Text>Debit Card</Text>
            
          </ListItem>
          <ListItem style={styles.radio}
            selected={this.state.radio4}
            onPress={() => this.toggleRadio4()}
          >
            <Radio style={styles.radio}
                selected={this.state.radio4}
                onPress={() => this.toggleRadio4()}
              />
              <Text>Credit Card</Text>
            
          </ListItem>
          <ListItem style={styles.radio}
            selected={this.state.radio5}
            onPress={() => this.toggleRadio5()}
          >
            <Radio style={styles.radio}
                selected={this.state.radio5}
                onPress={() => this.toggleRadio5()}
              />
              <Text>Net Banking</Text>
            
          </ListItem>
          <ListItem style={styles.radio}
            selected={this.state.radio6}
            onPress={() => this.toggleRadio6()}
          >
            <Radio style={styles.radio}
                selected={this.state.radio6}
                onPress={() => this.toggleRadio6()}
              />
              <Text>EMI</Text>
            
          </ListItem>
        </Content>
      </Container>
      </StyleProvider>

    );
  }
}

export default NHRadio;