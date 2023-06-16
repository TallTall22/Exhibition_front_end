import { useEffect, useState } from "react"
import { getVideos } from "../../api/videos"
import  YouTube  from "react-youtube"
import { Accordion } from "react-bootstrap"

function VideoPage(){
  const [videos,setVideos]=useState([])

  useEffect(()=>{
    const getVideoAsync=async()=>{
      const data=await getVideos()
      const videos=data.videos
      setVideos(videos)
    }
    getVideoAsync()
  })
  return (
    <div className="pb-5">
      {
        videos.map(video=>
          <div className="w-100 mb-5 d-flex flex-column align-items-center" key={video.id}>
          <h3 className="mb-3">{video.name}</h3>
          <YouTube title={video.name}  width={400} height={300} videoId={video.videoUrl.split('v=')[1]} ></YouTube>
          <Accordion className="w-50 mt-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header >簡介</Accordion.Header>
              <Accordion.Body>
              {video.description}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
          </div>
          )
      }
    </div>
  )
}

export default VideoPage