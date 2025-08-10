import { displayClassName, shapeClassName, colorClassName, fontClassName, boxClassName, sizeClassName } from "./atomicStyleClassName";

export const styleClassName = { ...colorClassName, ...fontClassName, ...displayClassName, ...sizeClassName, ...shapeClassName, ...boxClassName }