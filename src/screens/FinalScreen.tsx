import {
  AnimatedTextBlockWrapper,
  DialogWrapper,
  StaticTextBlockWrapper,
} from "@/components/DialogWrapper";
import React from "react";

export const FinalScreen: React.FC = () => {
  return (
    <DialogWrapper>
      <AnimatedTextBlockWrapper>
        <StaticTextBlockWrapper
          imgSrc="/images/email.png"
          title="Processing your conversation"
          description="Your chat transcript will arrive in your inbox shortly!"
        />
      </AnimatedTextBlockWrapper>
    </DialogWrapper>
  );
};
