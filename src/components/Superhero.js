import { Card, Container, Row, Col, Image } from "react-bootstrap"
import averImage from "../assets/superhero/avengers.webp"
import capImage from "../assets/superhero/captain.webp"
import guarImage from "../assets/superhero/guardians.webp"
import ironImage from "../assets/superhero/ironman.webp"
import thImage from "../assets/superhero/the dark.webp"
import womanImage from "../assets/superhero/woman.webp"



const Superhero = () => {
    return (
    <div>
        <Container>
            <br/>
            <h1 className="text-white" id="superhero">Superhero Movies</h1>
            <Row>
                <Col md={4} className="movieWrapperr">
                <Card className="movieImage">
            <Image src={averImage} alt="Avengers" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Avengers</Card.Title>
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
            <Image src={capImage} alt="captain" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Captain</Card.Title>
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
            <Image src={guarImage} alt="guardians" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Guardians</Card.Title>
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
            <Image src={ironImage} alt="ironman" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Ironman</Card.Title>
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
            <Image src={thImage} alt="The Dark" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">The Dark</Card.Title>
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
            <Image src={womanImage} alt="woman" className="images"/>
            <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">Wonder Woman</Card.Title>
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


export default Superhero