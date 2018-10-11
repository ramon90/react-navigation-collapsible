import React, {Component} from 'react';
import { Text, SectionList, Animated, TouchableOpacity } from 'react-native';

import { withCollapsible } from 'react-navigation-collapsible';

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

class FlatListScreen extends Component{
  static navigationOptions = {
    title: 'Flatlist'
  };

  constructor(props){
    super(props);

    const data = [];
    for(let i = 0 ; i < 60 ; i++){
      data.push(i);
    }

    this.state = {
      data: data
    }
  }

  renderItem = ({item}) => (
    <TouchableOpacity 
      onPress={() => {
        this.props.navigation.navigate('DetailScreen');
      }}
      style={{width: '100%', height: 50, borderBottomColor: '#0002', borderBottomWidth: 0.5, paddingHorizontal: 20, justifyContent: 'center'}}>
      <Text style={{fontSize: 22}}>{item}</Text>
    </TouchableOpacity>
  )

  // onScroll = e => {
  //   console.log(e.nativeEvent.contentOffset);
  // }

  render(){
    const { paddingHeight, scrollY, onScroll } = this.props.collapsible;

    const data = [];
    for(let i = 0 ; i < 40 ; i++){
      data.push(i.toString());
    }

    return (
      <AnimatedSectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={[
          {title: 'Title1', data: data},
          {title: 'Title2', data: data},
          {title: 'Title3', data: data},
        ]}
        keyExtractor={(item, index) => item + index}

        style={{paddingTop: paddingHeight}}
        scrollIndicatorInsets={{top: paddingHeight}}
        onScroll={onScroll} 
        _mustAddThis={scrollY}
      />
    )
  }
}

export default withCollapsible(FlatListScreen, {iOSCollapsedColor: '#031'});
