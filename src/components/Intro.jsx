import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import ironmanImage from "../assets/carousel/ironman.jpg"

const Intro = () => {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block carousel'
        itemId={1}
        src={ironmanImage}
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
export default Intro






// import React from 'react';
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBCarouselElement,
// } from 'mdb-react-ui-kit';

// const Intro = () => {
//   return (
//     <MDBCarousel showControls>
//       <MDBCarouselInner className="rounded-5 shadow-4-strong">
//         <MDBCarouselItem className='active'>
//           <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
//         </MDBCarouselItem>
//         <MDBCarouselItem>
//           <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
//         </MDBCarouselItem>
//         <MDBCarouselItem>
//           <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
//         </MDBCarouselItem>
//       </MDBCarouselInner>
//     </MDBCarousel>
//   )
// }
// export default Intro





// import { Col, Container, Row, Button } from "react-bootstrap";

// const Intro = () => {
//     return (
//         <div className="intro">
//         <Container className="text-white text-center d-flex justify-content-center align-items-center">
//           <Row>
//             <Col>
//             <div className="title">REKAYASA FILMKU</div>
//             <div className="title">RPL JURUSANKU</div>
//             {/* <div className="introButton mt-4 text-center">
//                 <Button href="#anime" variant="dark">LOGIN</Button>
//             </div> */}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     )
// }

// export default Intro