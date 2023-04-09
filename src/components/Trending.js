import { Card, Container, Row, Col, Image } from "react-bootstrap"
import bloadImage from "../assets/trending/bload.webp"
import roadImage from "../assets/trending/road.webp"
import thelastImage from "../assets/trending/thelast.jpg"
import naruVideo from "../assets/video/naruto.mp4"


const Trending = () => {
    return (
    <div>
        <Container>
            <br/>
            <h1 className="text-white" id="trending">Trending Movies</h1>
            <Row>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
            <Image src={roadImage} alt="naruto the last" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
          This is a wider card with natural lead-into additional content
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            
            </div>    
        </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
            <Image src={roadImage} alt="naruto the last" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
          This is a wider card with natural lead-into additional content
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            
            </div>    
        </Card>
                </Col>
              
                 <Col md={4} className="movieWrapper">
                <Card className="movieImage">
            <Image src={bloadImage} alt="naruto the last" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
          This is a wider card with natural lead-into additional content
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            
            </div>    
        </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
            <Image src={bloadImage} alt="naruto the last" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
          This is a wider card with natural lead-into additional content
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            
            </div>    
        </Card>
                </Col>
                
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
            <Image src={thelastImage} alt="naruto the last" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
          This is a wider card with natural lead-into additional content
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            
            </div>    
        </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
            <Image src={thelastImage} alt="naruto the last" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
          This is a wider card with natural lead-into additional content
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
            
            </div>    
        </Card>
                </Col>
            </Row>
        </Container>
      
    </div>
    )
}


export default Trending