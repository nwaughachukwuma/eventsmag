import React, {Component} from 'react';
import { Text, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Button as PaperBtn } from 'react-native-paper'

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export class Button extends Component {
  name = 'Button';
  renderContent = (textStyle) => {
    const hasText = this.props.text === undefined;
    return hasText ? this.props.children : this.renderText(textStyle);
  };

  renderText = (textStyle) => (
    <Text style={textStyle}>{this.props.text}</Text>
  );

  render() {
    const { style, icon, loading, color, textStyle, ...restProps } = this.props;
    const themeColor = color? {primary: color}: {};
    return (
      <PaperBtn
        mode="contained"
        icon={icon? icon: null}
        loading={loading? loading: false}
        dark
        style={[style]}
        theme={{roundness: 20, colors: themeColor }}
        {...restProps}
      >
        {this.renderContent({...styles.buttonText, ...textStyle})}
      </PaperBtn>
    );
  }
}

export default Button;