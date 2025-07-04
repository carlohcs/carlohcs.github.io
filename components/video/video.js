import { useRef } from 'react'

import PropTypes from 'prop-types'

const Video = ({ videoName }) => {
  const videoRef = useRef(null)

  const play = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  const videoFullName = `../../static/video/${videoName}`

  return (
    <video className="project__video project__cover" ref={videoRef} loop muted playsInline onMouseOver={play} onClick={togglePlay} onTouchStartCapture={play} preload='auto'>
      <source src={`${videoFullName}.webm`} type="video/webm" />
      <source src={`${videoFullName}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  )
}

Video.propTypes = {
  videoName: PropTypes.string.isRequired
}

export default Video
