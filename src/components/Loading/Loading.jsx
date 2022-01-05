import React from "react";
import { LoadingDots, LoadingTitle, StyledLoading } from "./Loading.styles";

const Loading = ({ isLoading }) => {
  return (
    <StyledLoading isLoading={isLoading}>
      <LoadingTitle>
        Loading<LoadingDots>.</LoadingDots>
      </LoadingTitle>
    </StyledLoading>
  );
};

export default Loading;
