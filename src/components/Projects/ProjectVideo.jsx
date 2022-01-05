import React, { useState } from "react";
import { pauseSVG, playSVG } from "../../assets/svgs";
import {
  Frame,
  Placeholder,
  ThemeImage,
  Video,
  VideoButton,
  VideoContainer
} from "./Projects.styles";

const ProjectVideo = ({ project, setImagesLoadedCount }) => {
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

  const handleOnLoad = () => {
    setImagesLoadedCount((state) => state + 1);
  };

  return (
    <Frame>
      {project.hasScreenShots ? (
        <ThemeImage />
      ) : (
        <VideoContainer>
          <VideoButton name={project.id} onClick={handlePlay}>
            {isPlaying ? pauseSVG : playSVG}
          </VideoButton>
          <Placeholder isPlaying={isPlaying} src={project.placeholder} onLoad={handleOnLoad} />
          <Video isPlaying={isPlaying} id={project.id} src={project.video} alt={project.name} />
        </VideoContainer>
      )}
    </Frame>
  );
};

export default ProjectVideo;
