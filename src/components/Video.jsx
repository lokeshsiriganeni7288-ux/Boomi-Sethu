import React from 'react'
import realestatevideo from '../assets/video/realestatevideo.mp4'

const Video = () => {
  return (
    <div>
        <video src={realestatevideo} autoPlay loop muted className='w-screen h-screen object-cover' />
    </div>
  )
}

export default Video