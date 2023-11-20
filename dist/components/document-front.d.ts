import type { Components, JSX } from "../types/components";

interface DocumentFront extends Components.DocumentFront, HTMLElement {}
export const DocumentFront: {
  prototype: DocumentFront;
  new (): DocumentFront;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
