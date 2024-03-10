import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const Components = () => {
    const name = 'Alina';
  const degree = 'Computer Science';
  return (
    <ScrollView>
      <Text>{'\n'}This is text.</Text>
      <View>
        <Image
          source={{
            uri: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eUYTB.img?w=768&h=432&m=6.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Input Your message Here"
      />
      {/* JSX Syntax*/}
      <Text>Hey, I am {name}!.{'\n'} How can i Help You?{'\n'} Mah self {name} {'\t'}and a {degree} graduated.</Text>
      <Doll/>
    </ScrollView>
  );
};
const getFullName = (fName, secName, lName) => {
    return fName + ' ' + secName + ' ' + lName;
  };

  const Doll = () => {
    return <Text>{'\n'}Hello, friends i am {getFullName('Taqwa', 'Batool', 'Khanum')}!</Text>;
  };

export default Components;