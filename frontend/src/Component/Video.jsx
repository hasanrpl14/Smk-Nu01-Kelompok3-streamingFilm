import video from "../assets/video/naruto.mp4";
const Video = () => {
  return ( 
    <>
    <div className="bg-black bg-opacity-70 h-screen w-full flex items-center justify-center">
   <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
     </video>
    </div>
    </>
    

  )
}

export default Video
  

