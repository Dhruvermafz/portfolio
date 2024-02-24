import React from "react";
import PropTypes from "prop-types";
import { OverlayTrigger, Tooltip as BootstrapTooltip } from "react-bootstrap";

const Tooltip = ({ text, placement, trigger, delay, children }) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<BootstrapTooltip id="tooltip">{text}</BootstrapTooltip>}
      trigger={trigger}
      delay={delay}
    >
      {children}
    </OverlayTrigger>
  );
};

Tooltip.propTypes = {
  /** Text to be displayed inside the tooltip */
  text: PropTypes.string.isRequired,
  /** Placement of the tooltip relative to the target element */
  placement: PropTypes.oneOf([
    "top",
    "right",
    "bottom",
    "left",
    "auto",
    "auto-start",
    "auto-end",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "right-start",
    "right-end",
    "left-start",
    "left-end",
  ]),
  /** Trigger for the tooltip (hover, focus, click, etc.) */
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /** Delay in milliseconds before showing the tooltip */
  delay: PropTypes.number,
  /** The target element to which the tooltip is attached */
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  placement: "top",
  trigger: ["hover", "focus"],
  delay: 0,
};

export default Tooltip;
