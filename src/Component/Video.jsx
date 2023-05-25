import video from "../assets/video/naruto.mp4";
const Video = () => {
  return ( 
    <>
    <div className="">

    </div>
   <h1>Ini Halaman Video</h1>
   <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
     </video>
    </>
    

  )
}

export default Video