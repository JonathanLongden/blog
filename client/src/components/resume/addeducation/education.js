import React, { Component } from 'react';


//import { Button } from 'reactstrap';
//import '../App.css';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: ""//,
          // Education:this.props.Education,
          // none:""
        };
       console.log(this.props.Education)
      }
    
      // componentWillMount() {

      //   this.setState({
      //     Education :this.props.Education
         
      //   })
      // }

    render() {
      console.log(this.props.Education);
      let EducateItem = this.props.Education.map((Educate) => {
        return <div>
        <li className="list-group-item list-group-item-action list-group-item-success" key={ Educate.url }>
          <div class="row">
            <div class="col-4">
            Facility : {Educate.FacilityName}    
            </div>
            <div class="col-4">
              Location : {Educate.FacilityLocation} 
            </div>
            <div class="col-4">
             {Educate.StartDate}-{Educate.EndDate}
            </div>
          </div>
          <div class="row">
            <div class="col-2">  
            </div>
            <div class="col-8">
              Education : {Educate.TrainingOrEducation} 
            </div>
        </div>
        </li>  
        </div>

      
      });
      return (
        <div class="container">
          <div class="row">
            <div class="col-3">    
            </div>
            <div class="col-6">
              <h1>Education</h1>
            </div>
            <div class="col-3">
            </div>
          </div>      
            {EducateItem}      
      </div>  
      );
    }
  }
  
  export default Education;