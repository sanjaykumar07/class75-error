import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase'



export default class LoginScreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
       email:'',
       password:''
      }
    }

    login=async(email,password)=>{

        if(email&&password){
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            alert(response)
            if(response)
            this.props.navigation.navigate('TransactionScreen')
        }
    }
    render(){
        return(
            <View>
                <TextInput style={{width:150,height:40,borderWidth:2}} placeHolder="enter email" onChangeText={text=>{this.setState({email:text})}} keyboardType="email-address"/>
                <TextInput style={{width:150,height:40,borderWidth:2}} placeHolder="enter password" 
                onChangeText={text=>{this.setState({password:text})}} secureTextEntry={true}/>
                <TouchableOpacity style={{width:150,height:40,borderWidth:2}} onPress={()=>{this.login(this.state.email,this.state.password)}} ><Text>Login</Text></TouchableOpacity>
            </View>
        )
    }
}