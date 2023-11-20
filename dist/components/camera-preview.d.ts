import type { Components, JSX } from "../types/components";

interface CameraPreview extends Components.CameraPreview, HTMLElement {}
export const CameraPreview: {
  prototype: CameraPreview;
  new (): CameraPreview;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
