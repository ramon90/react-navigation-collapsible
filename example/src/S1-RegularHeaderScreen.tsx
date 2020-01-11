import * as React from 'react';
import {Text, TouchableOpacity, Animated} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCollapsibleStack} from 'react-navigation-collapsible';

import {StackParamList} from '../App';

const data: number[] = [];
for (let i = 0; i < 100; i++) {
  data.push(i);
}

export type ScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};

const S1RegularScreen = ({navigation}: ScreenProps) => {
  const [d, setD] = React.useState(data);
  React.useEffect(() => {
    const del = () => {
      setD(prevD => {
        const [first, ...rest] = prevD;
        return rest;
      });
      setTimeout(del, 1000);
    };
    setTimeout(del, 1000);
  }, []);

  const {onScroll, containerPaddingTop} = {}; //useCollapsibleStack();
  console.log('------------- c2-1:', useCollapsibleStack);

  return (
    <Animated.FlatList
      data={d}
      onScroll={onScroll}
      contentContainerStyle={{paddingTop: containerPaddingTop}}
      // scrollIndicatorInsets={{top: containerPaddingTop}}
      renderItem={({item}: any) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            width: '100%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 22,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item: any) => item.toString()}
    />
  );
};

export {S1RegularScreen};
