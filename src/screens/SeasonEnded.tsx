import {
  AnimatedTextBlockWrapper,
  DialogWrapper,
  StaticTextBlockWrapper,
} from "@/components/DialogWrapper";
import React from "react";

export const SeasonEnded: React.FC = () => {
  return (
    <DialogWrapper>
      <AnimatedTextBlockWrapper>
        <StaticTextBlockWrapper
          imgSrc="/images/clock.png"
          title="Session Ended"
          description="Thanks for chatting! Come back soon for another conversation."
        />
      </AnimatedTextBlockWrapper>
    </DialogWrapper>
  );
};
