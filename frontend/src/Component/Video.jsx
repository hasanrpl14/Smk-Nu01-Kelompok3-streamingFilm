import video from "../assets/video/naruto.mp4";
const Video = () => {
  return ( 
    <>
    <div className="bg-gray-700">
    <h1>Ini Halaman Video</h1>
   <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
     </video>
     <div className=" w-full h-5/6 bg-center bg-cover rounded  border-white border-4 hover:border-black" 
    style={{ backgroundImage: `url("https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
          <div className=" w-full h-full bg-gradient-to-t from-black/100">
            dgd
          </div>
    </div>
    <br />
    <div className="w-full h-5/6 bg-center bg-cover rounded border-white border-4 hover:border-black" 
  style={{ 
    backgroundImage: `url("https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` 
  }}
>
  <div className="w-full h-full bg-gradient-to-t from-black/100">
    dgd
  </div>
</div>

    </div>
   
    </>
    

  )
}

export default Video
  


// import video from "../assets/video/naruto.mp4";
// import '../Component isi/style.css';

// const Video = () => {
//   return (
//     <div className="video-container">
//       <h1 className="video-title">Ini Halaman Video</h1>
//       <video className="video-player" controls>
//         <source src={video} type="video/mp4" />
//       </video>
//       <div
//         className="video-overlay"
//         style={{
//           backgroundImage: `url("https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
//         }}
//       >
//         <div className="video-overlay-content">
//           <h2 className="video-overlay-title">Video Title</h2>
//           <p className="video-overlay-description">Video description goes here</p>
//           <button className="video-overlay-button">Watch Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Video;
