import React from 'react';
import PropTypes from 'prop-types';

import { Text,View, StyleSheet, Platform, TouchableHighlight } from 'react-native';

const ViewPropTypes = require('react-native').ViewPropTypes || View.propTypes;

export default class DefaultMarker extends React.Component {
  static propTypes = {
    pressed: PropTypes.bool,
    pressedMarkerStyle: ViewPropTypes.style,
    markerStyle: ViewPropTypes.style,
    enabled: PropTypes.bool,
    currentValue: PropTypes.number,
    valuePrefix: PropTypes.string,
    valueSuffix: PropTypes.string,
    displayValue:PropTypes.bool,
    valueContainerStyle:PropTypes.object,
    valueTextStyle:PropTypes.object
  };

  render() {
    return (
      <TouchableHighlight>
        <View
          style={this.props.enabled ? [
            styles.markerStyle,
            this.props.markerStyle,
            this.props.pressed && styles.pressedMarkerStyle,
            this.props.pressed && this.props.pressedMarkerStyle,
          ] : [styles.markerStyle, styles.disabled]}
        >
          {this.props.displayValue&&
            <View style={this.props.valueContainerStyle}>
              <Text style={this.props.valueTextStyle}>{this.props.currentValue}</Text>
              <View style={{
                position:'absolute',
                bottom: -8,
                marginLeft:5,
                marginTop:1,
                width:0,
                height:0,
                borderStyle:'solid',
                borderWidth:6,
                borderTopColor:this.props.valueContainerStyle.backgroundColor||'rgb(237,49,43)',//下箭头颜色
                borderLeftColor:'transparent',//右箭头颜色
                borderBottomColor:'transparent',//上箭头颜色
                borderRightColor:'transparent'//左箭头颜色
              }} />
            </View>
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  markerStyle: {
    ...Platform.select({
      ios: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 1,
        shadowOpacity: 0.2,
      },
      android: {
        height: 12,
        width: 12,
        borderRadius: 12,
        backgroundColor: '#0D8675',
      },
    }),
  },
  pressedMarkerStyle: {
    ...Platform.select({
      ios: {},
      android: {
        height: 20,
        width: 20,
        borderRadius: 20,
      },
    }),
  },
  disabled: {
    backgroundColor: '#d3d3d3',
  },
});
