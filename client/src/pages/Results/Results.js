import React from 'react';
import ResultBox from '../../components/ResultBox';
import axios from 'axios';
import './Results.css';
import Navbar from '../../components/Navbar';
import { Link } from "react-router-dom";


class Results extends React.Component {
  
  state ={
    data : []
  }
  
  componentDidMount(){
  axios.get("/api/profile/findMain").then(res=>{
    
    
    this.setState({
      data: res.data
    })
    console.log(this.state.data)
   
  })

  }
    // constructor(props) {
    //   super(props);
    // }
  render() {

    

    const myStyles = {
      results: {
         display: 'grid',
      }
  }
    return (
           <div>
      <Navbar></Navbar>
            <div style={myStyles.results}>
                <h1>This is our Results Page</h1>
                {console.log(this.state.data)}
               {this.state.data.map(picObj=> <ResultBox path={picObj.path} uId={picObj.photographer[0]} /> )} 
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
              

     
            </div>
            </div>
            );
          }
        }
        
export default Results;