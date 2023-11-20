import type { Components, JSX } from "../types/components";

interface DocumentBack extends Components.DocumentBack, HTMLElement {}
export const DocumentBack: {
  prototype: DocumentBack;
  new (): DocumentBack;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
