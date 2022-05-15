export const fadeAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { opacity: 0.5, delay: 0.3 },
  },
};

export const collapseAnim = {
  hidden: {
    opacity: 0,
    display: "none",
  },
  show: {
    opacity: 1,
    display: "block",
    transition: { ease: "easeOut", duration: 0.3 },
  },
  end: {
    opacity: 0,
    display: "none",
    transition: { ease: "easeOut" },
  },
};

export const lineRotate1 = {
  hidden: {
    opacity: 1,
    background: "#a48a8a",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  show: {
    y: -8,
    rotate: -45,
    background: "#FE0002",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
export const lineRotate2 = {
  hidden: {
    opacity: 1,
    background: "#a48a8a",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  show: {
    y: 8,
    rotate: 45,
    background: "#FE0002",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const lineOut = {
  hidden: {
    opacity: 1,
  },
  show: {
    scale: 0,
    opacity: 0,
  },
};

export const defaultAnim = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
  },
};
