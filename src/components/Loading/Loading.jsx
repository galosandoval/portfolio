import React from "react";
import { LoadingDots, LoadingTitle, StyledLoading } from "./Loading.styles";

const Loading = () => {
  return (
    <StyledLoading>
      <LoadingTitle>
        Loading<LoadingDots>.</LoadingDots>
      </LoadingTitle>
    </StyledLoading>
  );
};

export default Loading;
