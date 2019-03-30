# react-native-super-slider

Pure JS react native slider component with one or two markers.
Options to customise track, touch area and provide customer markers and callbacks for touch events and value changes.


## Getting Started

- [react-native-super-slider](#react-native-super-slider)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage in a ScrollView](#usage-in-a-scrollview)
    - [shape up CustomMarker as left and right](#shape-up-custommarker-as-left-and-right)
    - [Partial report of the props](#partial-report-of-the-props)


### Installation

```bash
$ npm i react-native-super-slider --save
```

### Usage in a ScrollView

```
 enableScroll = () => this.setState({ scrollEnabled: true });
 disableScroll = () => this.setState({ scrollEnabled: false });

 render() {
   return (
     <ScrollView scrollEnabled={this.state.scrollEnabled}>
      <MultiSlider
        ...
        onValuesChangeStart={this.disableScroll}
        onValuesChangeFinish={this.enableScroll}
      />
    </ScrollView>
    );
```
### shape up CustomMarker as left and right

In order to make different styles on markers you can set isMarkersSeparated to true, define customMarkerLeft and customMarkerRight in MultiSlider. for example:


```
<MultiSlider
     ...
      isMarkersSeparated={true}

      customMarkerLeft={(e) => {
         return (<CustomSliderMarkerLeft
          currentValue={e.currentValue}/>)
          }}

         customMarkerRight={(e) => {
         return (<CustomSliderMarkerRight
         currentValue={e.currentValue}/>)
         }}
     />

```

### Partial report of the props
Feel free to contribute to this part of the documentation.


| Prop name | Default value | Type | Purpouse |
|:---------------------------------------------------------------------------------:|:-------------------------------------------------------------:|:-----------------:|:---------------------------------------:|
| values | [0] | array of numbers | Init values of the slider. |
| displayValue | false | boolean | If show the current value |
| valueContainerStyle | `{ width:30,height:25,backgroundColor:'rgb(237,49,43)',alignSelf:'center',position:'relative',top: -30,alignItems: 'center' }`, | object | Current value text container style |
| valueTextStyle | `{ flex:1,fontSize:16,color:'#fff',lineHeight:25 }`, | object | Current value text container style. |
| onValuesChangeStart | () => {} | function | Callback when the value starts changing |
| onValuesChange | () => {} | function | Callback when the value changes |
| onValuesChangeFinish | (values) => {} | function | Callback when the value stops changing |
| sliderLength | 280 | number | Length of the slider |
| touchDimensions | {height: 50,width: 50,borderRadius: 15,slipDisplacement: 200} | object | Area to be touched, should enclose the whole marker. Will be automatically centered and contain the marker. Slip displacement If finger leaves the marker measures distance before responder cuts out and changes are no longer registered, if not given marker will be active until pressed released. |
| customMarker |  | function | Component used for the cursor. |
| customMarkerLeft |  | function | Component used for the left cursor. |
| customMarkerRight |  | function | Component used for the right cursor. |
| min | 0 | number | Minimum value available in the slider. |
| max | 10 | number | Maximum value available in the slider. |
| step | 1 | number | Step value of the slider. |
| optionsArray |  | array of numbers | Possible values of the slider. Ignores min and max. |
| {container/track/selected/unselected/ markerContainer/marker/pressedMarker} Style |  | style object | Styles for the slider |
| valuePrefix |  | string | Prefix added to the value. |
| valueSuffix |  | string | Suffix added to the value. |
| enabledOne | true | boolean | Enables the first cursor |
| enabledTwo | true | boolean | Enables the second cursor |
| onToggleOne | undefined | function callback | Listener when first cursor toggles. |
| onToggleTwo | undefined | function callback | Listener when second cursor toggles. |
| allowOverlap | false | boolean | Allow the overlap within the cursors. |
| snapped | false | boolean | Use this when you want a fixed position for your markers, this will split the slider in N specific positions |
| markerOffsetX | 0 | number | Offset first cursor. |
| markerOffsetY | 0 | number | Offset second cursor. |
