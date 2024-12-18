import {
  AnimatedTextBlockWrapper,
  DialogWrapper,
  StaticTextBlockWrapper,
} from "@/components/DialogWrapper";
import React from "react";

export const NaughtyForm: React.FC = () => {
  return (
    <DialogWrapper>
      <AnimatedTextBlockWrapper>
        <StaticTextBlockWrapper
          imgSrc="/images/negative.png"
          title="Thanks for Chatting"
          titleClassName="sm:max-w-full bg-[linear-gradient(91deg,_#0FF_0.48%,_#FFF_85.97%)]"
          description="We appreciate your time. Let's have another conversation soon!"
        />
      </AnimatedTextBlockWrapper>
    </DialogWrapper>
  );
};
