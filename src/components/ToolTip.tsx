import React, { useState, ReactNode } from "react";
import styled from "styled-components";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
}

const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const TooltipBubble = styled.div<{ placement: string; visible: boolean }>`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  background: #222;
  color: #fff;
  border-radius: 4px;
  padding: 8px 12px;
  position: absolute;
  z-index: 99;
  font-size: 0.875rem;
  white-space: nowrap;
  ${({ placement }) =>
    placement === "top" &&
    `
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-8px);
  `}
  ${({ placement }) =>
    placement === "bottom" &&
    `
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(8px);
  `}
  ${({ placement }) =>
    placement === "right" &&
    `
      left: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(8px);
  `}
  ${({ placement }) =>
    placement === "left" &&
    `
      right: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(-8px);
  `}
`;

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = "top",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      <TooltipBubble
        placement={placement}
        visible={visible}
        role="tooltip"
        aria-live="polite"
      >
        {content}
      </TooltipBubble>
    </TooltipContainer>
  );
};
export default Tooltip;
