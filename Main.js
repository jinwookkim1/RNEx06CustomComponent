import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import MyCom from './MyCom';
import MyCom2 from './MyCom2';

export default class Main extends Component{

    state = {
        msg:"gggg"
    }
    render(){
        return(
            <View style={ styles.root }>
               <MyCom2 msg={this.state.msg}></MyCom2>
               <MyCom aaa={this.clickBtn1} title="btn1" color="indigo"></MyCom>
               <MyCom aaa={this.clickBtn2} title="btn2" color="orange"></MyCom>
               <MyCom aaa={this.clickBtn3} title="btn3" color="green"></MyCom>

            </View>
        );
    } // render method...

    clickBtn1=()=>{
       this.setState({msg:"Hello"});
    }

    clickBtn2=()=>{
        this.setState({msg:"Nice"});
    }

    clickBtn3=()=>{
        this.setState({msg:"Good"});
    }




} // Main Class...

// 나만의 컴포넌트





// 스타일 객체들 
const styles = StyleSheet.create({
    root:{
        flex:1,
        padding:16
        
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
    }
});