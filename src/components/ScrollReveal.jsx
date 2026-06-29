import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  chakra,
  shouldForwardProp,
  useBreakpointValue,
} from "@chakra-ui/react";
import { isValidMotionProp, motion, useReducedMotion } from "framer-motion";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ScrollReveal({
  children,
  delay = 0,
  distance = 32,
  direction = "up",
  duration = 0.65,
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const travel = isMobile ? Math.round(distance * 0.65) : distance;

  if (shouldReduceMotion) {
    return <Box {...props}>{children}</Box>;
  }

  const axisOffset =
    direction === "left" || direction === "right"
      ? {
          x: direction === "left" ? -travel : travel,
          y: 0,
        }
      : {
          x: 0,
          y: direction === "down" ? -travel : travel,
        };

  return (
    <MotionBox
      initial={{
        opacity: 0,
        filter: "blur(8px)",
        ...axisOffset,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      willChange="transform, opacity, filter"
      {...props}
    >
      {children}
    </MotionBox>
  );
}

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  distance: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  duration: PropTypes.number,
  once: PropTypes.bool,
};
