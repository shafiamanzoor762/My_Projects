import {View,Button, StyleSheet,Text} from 'react-native'

function Contact() {
    return(
<View style={styles.container}>
            <Text>Contact</Text>   
     <Button style={styles.butt} title='Contact Us'/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butt:{
    height:10,
    width:50
  }
});

export default Contact;
