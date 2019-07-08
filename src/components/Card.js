import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import './../App.css';

class Card extends Component {
  constructor(props) {
    super(props);
      this.state = {
        givenName: "",
        surname: "",
        email: "",
        phone: "",
        houseName:"",
        street:"",
        suburb:"",
        state:"",
        postcode:"",
        country:""
      }
      this.getGivenName = this.getGivenName.bind(this);
      this.getSurname = this.getSurname.bind(this);
      this.getEmail = this.getEmail.bind(this);
      this.getPhone = this.getPhone.bind(this);
      this.getHouseName = this.getHouseName.bind(this);
      this.getStreet = this.getStreet.bind(this);
      this.getSuburb = this.getSuburb.bind(this);
      this.getState = this.getState.bind(this);
      this.getPostcode = this.getPostcode.bind(this);
      this.getCountry = this.getCountry.bind(this);
  }
  //This code will take input
  getGivenName(event) {
    this.setState({
      givenName: event.target.value
      });
      //console.log(event.target.value);
    }

  getSurname(event) {
    this.setState({
      surname: event.target.value
      });
    }

  getEmail(event) {
    this.setState({
      email: event.target.value
        });
    }

  getPhone(event) {

    this.setState({
      phone:event.target.value
      });
    }

  getHouseName(event) {
    this.setState({
      houseName: event.target.value
        });
    }

  getStreet(event) {
    this.setState({
      street: event.target.value
        });
    }

  getSuburb(event) {
    this.setState({
      suburb: event.target.value + ","
        });
    }

  getState(event) {
    this.setState({
      state: event.target.value
        });
    }

  getPostcode(event) {
    let

    this.setState({
      postcode: event.target.value
        });
    }

    getCountry(event) {
      this.setState({
        country: event.target.value
          });
    }


  render() {
    return (
      <div>

    <div className="card-container">
      <div className="card-content">
        <h1>hCard Builder</h1>
        <h6>PERSONAL DETAILS</h6>
        <hr></hr>

    <Form>
      <Row>
        <Col>
          <Form.Label className="name">GIVEN NAME</Form.Label>
          <Form.Control value= {this.state.givenName} onChange={this.getGivenName} className="builder-input" />
        </Col>
        <Col>
          <Form.Label className="name">SURNAME</Form.Label>
          <Form.Control onChange={this.getSurname} className="builder-input"  />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Form.Label className="name">EMAIL</Form.Label>
          <Form.Control onChange={this.getEmail} className="builder-input" />
        </Col>
        <Col>
          <Form.Label className="name">PHONE</Form.Label>
          <Form.Control onChange={this.getPhone} className="builder-input"  />
        </Col>
      </Row>
    </Form>
  <br></br><br></br><br></br>

  <h6>ADDRESS</h6>
  <hr></hr>

  <Form>
    <Row>
      <Col>
        <Form.Label className="name">HOUSE NAME OR #</Form.Label>
        <Form.Control onChange={this.getHouseName}className="builder-input" />
      </Col>
      <Col>
        <Form.Label className="name">STREET</Form.Label>
        <Form.Control onChange={this.getStreet}className="builder-input" />
      </Col>
    </Row><br></br>
    <Row>
      <Col>
        <Form.Label className="name">SUBURB</Form.Label>
        <Form.Control onChange={this.getSuburb} className="builder-input"/>
      </Col>
      <Col>
        <Form.Label className="name">STATE</Form.Label>
        <Form.Control onChange={this.getState} className="builder-input" />
      </Col>
    </Row><br></br>
    <Row>
      <Col>
        <Form.Label className="name">POSTCODE</Form.Label>
        <Form.Control onChange={this.getPostcode} className="builder-input"/>
      </Col>
      <Col>
        <Form.Label className="name">COUNTRY</Form.Label>
        <Form.Control onChange={this.getCountry} className="builder-input" />
      </Col>
    </Row><br></br>
    <Row>
      <Col>
        <button className="button avatar">Upload Avatar</button>
      </Col>
      <Col>
        <button className="button create">Create hCard</button>
      </Col>
    </Row>
  </Form>
    </div>
  </div>

  <div className="preview-container">
    <div className="header">
        <h4>HCARD PREVIEW</h4>
    </div>

    <div className="preview-card-header">
    <div className="header-container">
      <p className="header-name">  {this.state.givenName} {this.state.surname}</p>
      </div>
      </div>

    <div className="avatar-container">
      <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKITLITj_C8c8HtXkDY5ltJu3xzj1kSn93BncU3aZR5yCtdlV">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKITLITj_C8c8HtXkDY5ltJu3xzj1kSn93BncU3aZR5yCtdlV" alt="purvi image"/></a>
      </div>


      <div className="preview-card">
      <div className="preview-content">
        <form className="form-style-4">
        <div className="card-item">
        <label >
          <span className="span">EMAIL</span><input type="text"  value={this.state.email} className="email" />
        </label><hr></hr>
        <label>
          <span  className="span">PHONE</span><input type="text" value={this.state.phone} />
        </label><hr></hr>
        <label >
          <span  className="span-address">ADDRESS </span><input type="text"  value={this.state.houseName + " " + this.state.street}/>
        </label><hr></hr>
        <label>
          <span  className="span1"></span><input type="text"  value={this.state.suburb + "  " + this.state.state}/>
        </label><hr></hr>
        </div>
          </form>
      <form>
    <div className="grid-container">
        <label>
          <span>POSTCODE</span><input type="text"  value={this.state.postcode} className="form-input"/>
        </label>

        <label>
          <span className="country" >COUNTRY</span><input type="text" value={this.state.country} className="form-input"/>
        </label>

    </div>
    </form>
  </div>
  </div>
</div>
</div>
    )
  }
};

export default Card;
