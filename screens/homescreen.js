import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {Icon} from 'react-native-elements';

export default class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state = {movieDetails: {}} 
    }
    getMovie = ()=>{
        const url = "http://127.0.0.1:5000/get-movie"
        axios.get(url).then(responce =>{
           var details = responce.data.data
           this.setState({movieDetails: details})
           console.log(details)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    likedmovie = () =>{
      const url = " http://127.0.0.1:5000/liked-movie"
      axios.post(url).then(responce =>{
        this.getMovie() 
      })
      .catch(error =>{
        console.log(error.message)
      })
    }
    notlikedmovie = () =>{
      const url = " http://127.0.0.1:5000/unliked-movie"
      axios.post(url).then(responce =>{
        this.getMovie() 
      })
      .catch(error =>{
        console.log(error.message)
      })
    }
    notwatchedmovie = () =>{
      const url = " http://127.0.0.1:5000/did-not-watch-movie" 
      axios.post(url).then(responce =>{
        this.getMovie() 
      })
      .catch(error =>{
        console.log(error.message)
      })
    }
    //componentDidMount(){
        //this.getMovie() 
    //}
  render(){
    return (
      <View style={styles.container}>
        <View>
        <Header
                centerComponent = {{text: "Movies", style: {fontSize: 25}}}
                backgroundColor = {"black"}
            />
        </View>
        <View>
          <Image
            source = {require("../assets/favicon.png")}
            style = {{width: '60%', height: '60%'}}
          />
          <TouchableOpacity onPress = {() =>{
            this.likedmovie()
          }}>
            <Icon 
              name = {"check"}
              type = {"entypo"}
            />
          </TouchableOpacity>
          <TouchableOpacity  onPress = {() =>{
            this.notlikedmovie()
          }}>
            <Icon 
              name = {"cross"}
              type = {"entypo"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress = {() =>{
            this.notwatchedmovie()
          }}>
            <Text>did not watch</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
