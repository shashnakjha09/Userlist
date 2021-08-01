import React from 'react'
import "./style.css";
import{ Card , Container , Row , Col} from 'react-bootstrap';

function Itemlist({userInfo}) {
    const{email , first_name , last_name , avatar} = userInfo;
    console.log(email);
    return (
        <>
        <Container>
          <Row>
          <Col>
      <div className="main">
        <div className="main-div">
           <div className="card">
             <Card style={{ width: '18rem'  , border: "1px solid black"}}>
               <Card.Img variant="top" src="https://reqres.in/img/faces/9-image.jpg" />
                 <Card.Body>
                    <Card.Title>{email}</Card.Title>
                      <Card.Text>
                         {userInfo.first_name}
                      </Card.Text>
                 </Card.Body>
             </Card>
             </div>
            </div> 
            </div>
          </Col>
          <Col>
          <div className="main">
        <div className="main-div">
           <div className="card">
             <Card style={{ width: '18rem'  , border: "1px solid black"}}>
               <Card.Img variant="top" src="https://reqres.in/img/faces/9-image.jpg" />
                 <Card.Body>
                    <Card.Title>jha1994shashank@gmail.com</Card.Title>
                      <Card.Text>
                         shashank kumar jha
                      </Card.Text>
                 </Card.Body>
             </Card>
             </div>
            </div> 
            </div>
          </Col>
          <Col>
          <div className="main">
        <div className="main-div">
           <div className="card">
             <Card style={{ width: '18rem'  , border: "1px solid black"}}>
               <Card.Img variant="top" src="https://reqres.in/img/faces/9-image.jpg" />
                 <Card.Body>
                    <Card.Title>jha1994shashank@gmail.com</Card.Title>
                      <Card.Text>
                         shashank kumar jha
                      </Card.Text>
                 </Card.Body>
             </Card>
             </div>
            </div> 
            </div>
          </Col>
          </Row>

          <Row>
          <Col><div className="main">
        <div className="main-div">
           <div className="card">
             <Card style={{ width: '18rem'  , border: "1px solid black"}}>
               <Card.Img variant="top" src="https://reqres.in/img/faces/9-image.jpg" />
                 <Card.Body>
                    <Card.Title>jha1994shashank@gmail.com</Card.Title>
                      <Card.Text>
                         shashank kumar jha
                      </Card.Text>
                 </Card.Body>
             </Card>
             </div>
            </div> 
            </div></Col>
          <Col><div className="main">
        <div className="main-div">
           <div className="card">
             <Card style={{ width: '18rem'  , border: "1px solid black"}}>
               <Card.Img variant="top" src="https://reqres.in/img/faces/9-image.jpg" />
                 <Card.Body>
                    <Card.Title>jha1994shashank@gmail.com</Card.Title>
                      <Card.Text>
                         shashank kumar jha
                      </Card.Text>
                 </Card.Body>
             </Card>
             </div>
            </div> 
            </div></Col>
          <Col><div className="main">
        <div className="main-div">
           <div className="card">
             <Card style={{ width: '18rem'  , border: "1px solid black"}}>
               <Card.Img variant="top" src="https://reqres.in/img/faces/9-image.jpg" />
                 <Card.Body>
                    <Card.Title>jha1994shashank@gmail.com</Card.Title>
                      <Card.Text>
                         shashank kumar jha
                      </Card.Text>
                 </Card.Body>
             </Card>
             </div>
            </div> 
            </div></Col>
          </Row>

          </Container>

        </>
    )
}

export default Itemlist
