import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

/* eslint-disable react/prop-types */

vi.mock("framer-motion", async () => {
  const React = await import("react");
  const createMotionComponent = (tag) => {
    const MotionMock = React.forwardRef((props, ref) => {
      const {
        animate,
        children,
        exit,
        initial,
        transition,
        viewport,
        whileHover,
        whileInView,
        whileTap,
        ...rest
      } = props;

      void animate;
      void exit;
      void initial;
      void transition;
      void viewport;
      void whileHover;
      void whileInView;
      void whileTap;

      return React.createElement(tag, { ref, ...rest }, children);
    });

    MotionMock.displayName = `MotionMock(${tag})`;

    return MotionMock;
  };

  return {
    isValidMotionProp: () => false,
    motion: {
      div: createMotionComponent("div"),
    },
    useReducedMotion: () => false,
    useScroll: () => ({ scrollYProgress: 0 }),
    useSpring: (value) => value,
  };
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver = ResizeObserverMock;

Element.prototype.scrollIntoView = vi.fn();
window.scrollTo = vi.fn();
