import React, { useState } from "react";
import { pauseSVG, playSVG } from "../../assets/svgs";
import { Frame, VideoButton, VideoContainer } from "./Projects.styles";

const ProjectVideo = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (event) => {
    const video = document.querySelector(`#${event.currentTarget.name}`);
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };
  return (
    <Frame>
      <VideoContainer>
        <VideoButton name={project.id} onClick={handlePlay}>
          {isPlaying ? pauseSVG : playSVG}
        </VideoButton>
        <video id={project.id} src={project.video} alt={project.name} />
      </VideoContainer>
    </Frame>
  );
};

export default ProjectVideo;
