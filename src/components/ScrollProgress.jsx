import React from "react";
import { Box, useToken } from "@chakra-ui/react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [teal300] = useToken("colors", ["teal.300"]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <Box
      as={motion.div}
      position="fixed"
      top={0}
      left={0}
      right={0}
      h="3px"
      bg={teal300}
      style={{
        scaleX: shouldReduceMotion ? scrollYProgress : scaleX,
        transformOrigin: "0%",
      }}
      zIndex={1400}
      pointerEvents="none"
      boxShadow={`0 0 18px ${teal300}`}
    />
  );
}
