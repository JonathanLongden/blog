import React, { Component } from 'react';
import { Col, Row, Grid, ControlLabel} from 'react-bootstrap';
import Contact from './contact';
import Header from '../frontpage/Header';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.SuperUser.user,
      Work: "TREC",
      Education: "Montana Code School",
      Activities: "Cross Country Skiiing",
      Hobbies: "Family"
    }

  }
  render() {
    return (
    <div>
      <div>
      <Header SuperUser = {this.state}/>
      </div>
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={9}></Col>
            <Col xs={6} md={3}><Contact /></Col>
          </Row>
          <ControlLabel  className="pull-left">Work Experience</ControlLabel>
          <Row className="show-grid">
            <Col xs={12} md={9}></Col>
            <Col xs={6} md={3}><Contact /></Col>
          </Row>
        </Grid>
      </div>
    </div>
    );
  }
}

export default Resume;







// var React = require('react');
// var ReactDOM = require('react-dom');
// var EducationPic = require('./educationPic.js');
// var Link = require('react-router').Link;

// var Resume = React.createClass({
// 	componentDidMount() {
// 	  var element = ReactDOM.findDOMNode(this.refs.dropdown) //for materialize to work

// 	$(element).ready(function() {
//   	$('.modal-trigger').leanModal({
//   	dismissible: true, // Modal can be dismissed by clicking outside of the modal
//   	opacity: .5, // Opacity of modal background
//   	in_duration: 300, // Transition in duration
//   	out_duration: 200, // Transition out duration
//   	ready: function() {  }, // Callback for Modal open
//   	complete: function() {  } // Callback for Modal close
// 		}
// 	);
//     $('select').material_select();
//   });
// },

// 	render: function(){
// 		return (
// 			<div>
// 			<div className="backbutton">
//          	<Link to='/' className="white-text waves-effect waves-white btn">
//             Home
//           	</Link>
//       		</div>


// 		<h1>Resume</h1>






// 	<a className="modal-trigger" href="#modal2">
//     	<img height="80px" width="80px" src='./image/education.png'/>
//     	<p>Education</p>
//     </a>
//  	<div id="modal2" className="modal modal-fixed-footer">
//     <div className="modal-content">
// 			<div className="card-panel green">
// 				<span className="white-text ">
// 					<div className="row">
// 						<p>Montana Code Schools
// 						</p>
// 						<p>Bozeman, MT
// 						</p>
// 						<p> 2016-Summer
// 						</p>
// 					</div>
// 					<div className="row">
// 						<p>Coder of the Mern Stack
// 						</p>
// 					</div>
// 					<div className="row">
// 						<p>Western Governors University
// 						</p>
// 						<p>Salt Lake City, UT
// 						</p>
// 						<p> 2010-2013
// 						</p>
// 					</div>
// 					<div className="row">
// 						<p>Masters of Art in Mathematics Educations for Grades (5-12)
// 						</p>
// 					</div>
// 					<div className="row">
// 						<p>Montana State University—Northern
// 						</p>
// 						<p>Havre, MT
// 						</p>
// 						<p> 2006-2009
// 						</p>
// 					</div>
// 					<div className="row">
// 						<p>Bachelor of Science in Education Secondary Education General Science (5-12)
// 						</p>
// 					</div>
// 					<div className="row">
// 						<p>Fort Peck Community College
// 						</p>
// 						<p>Poplar, MT
// 						</p>
// 						<p>2003-2006
// 						</p>
// 					</div>
// 					<div className="row">
// 						<p>Associated of Applied Science Degree 2006
// 						</p>
// 					</div>
// 					<div className="row">
// 						<p>Poplar High School
// 						</p>
// 						<p>Poplar, MT
// 						</p>
// 						<p>1999-2003
// 						</p>
// 					</div>
// 					<div className="row">
// 						<p>Salutatorian
// 						</p>
// 					</div>
// 				</span>
//      		</div>
//     </div>
//  	</div>



//  	<a className="modal-trigger" href="#modal3">
//     	<img height="80px" width="80px" src='./image/work.png'/>
//     	<p>Professional Experience</p>
//     </a>
//   	<div id="modal3" className="modal modal-fixed-footer">
//     <div className="modal-content">
//       	<div className="col s6">
// 			<div className="card-panel green">
//      			<span className="white-text ">
//      			<p>Fort Peck Community College Math Instructor</p>
//      			<p>Poplar, MT</p>
//      			<p>2013-2014-Aug</p>

// 				<p>Poplar Middle School Science Teacher</p>
// 				<p>Poplar, MT</p>
// 				<p>2014-Spring</p>

// 				<p>Brockton High School Science Teacher</p>
// 				<p>Brockton, MT</p>
// 				<p>2011- 2013</p>

// 				<p>Brockton High School Math Teacher</p>
// 				<p>Brockton, MT</p>
// 				<p>2010 - 2011</p>

// 				<p>Fort Peck Community College Science Teacher</p>
// 				<p>Poplar, MT</p>
// 				<p>2010-Summer</p>

// 				<p>Broadus High School Student Teaching</p>
// 				<p>Broadus, MT</p>
// 				<p>2009-Fall</p>

// 				<p>Havre Middle School Practicum Spring</p>
// 				<p>Havre, MT</p>
// 				<p>2009</p>

// 				<p>Havre High School Practicum Fall</p>
// 				<p>Havre, MT</p>
// 				<p>2008</p>

// 				<p>Havre High School Practicum Spring </p>
// 				<p>Havre, MT</p>
// 				<p>2008</p>

// 				<p>Poplar Middle Schools Substituted</p>
// 				<p>Poplar, MT</p>
// 				<p>2006– 2008</p>
//      			</span>
//      		</div>
// 	   	</div>
//     </div>
//  	</div>


//  	<a className="modal-trigger" href="#modal4">
//     	<img height="80px" width="80px" src='./image/work2.png'/>
//     	<p>Work Experience</p>
//     </a>
//   	<div id="modal4" className="modal modal-fixed-footer">
//     <div className="modal-content">
//       	<div className="col s6">
// 			<div className="card-panel green z-depth-5">
//      			<span className="white-text ">
//      			<pre className="flow-text">Gallatin Rest Home		Bozeman, MT				2015-2016</pre>

// 				<pre className="flow-text">Bridger Health Care 	Bozeman, MT 	2014</pre>

// 				<pre className="flow-text">Prairie Travelers 		Glasgow, MT 	2013-2014</pre>

// 				<pre className="flow-text">MSU-Northern Resident Hall Advisor 	Havre, MT 2007-2009</pre>

// 				<pre className="flow-text">MSU-Northern Dish Washer 	Havre, MT 	2007-2009</pre>

// 				<pre className="flow-text">MSU-Northern Desk Security Guard	Havre, MT	2006-2009</pre>
//      			</span>
//      		</div>
// 	   	</div>
//     </div>
//  	</div>



// 	<a className="modal-trigger" href="#modal5">
//     	<img height="80px" width="80px" src='./image/org.png'/>
//     	<p>Professional Organization</p>
//     </a>
//   	<div id="modal5" className="modal modal-fixed-footer">
//     <div className="modal-content">
//       	<div className="col s6">
// 			<div className="card-panel green">
//      			<span className="white-text ">
//      			<p>Montana Education Association</p>
// 				<p>First Aid</p>
// 				<p>CPR</p>
//      			</span>
//      		</div>
// 	   	</div>
//     </div>
//  	</div>







// 			</div>
// 			)
// 	}
// });

// module.exports = Resume;
