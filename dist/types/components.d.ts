/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface CameraPreview {
    }
    interface DocumentBack {
    }
    interface DocumentFront {
    }
}
export interface CameraPreviewCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCameraPreviewElement;
}
declare global {
    interface HTMLCameraPreviewElementEventMap {
        "photoTaked": string;
    }
    interface HTMLCameraPreviewElement extends Components.CameraPreview, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCameraPreviewElementEventMap>(type: K, listener: (this: HTMLCameraPreviewElement, ev: CameraPreviewCustomEvent<HTMLCameraPreviewElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCameraPreviewElementEventMap>(type: K, listener: (this: HTMLCameraPreviewElement, ev: CameraPreviewCustomEvent<HTMLCameraPreviewElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCameraPreviewElement: {
        prototype: HTMLCameraPreviewElement;
        new (): HTMLCameraPreviewElement;
    };
    interface HTMLDocumentBackElement extends Components.DocumentBack, HTMLStencilElement {
    }
    var HTMLDocumentBackElement: {
        prototype: HTMLDocumentBackElement;
        new (): HTMLDocumentBackElement;
    };
    interface HTMLDocumentFrontElement extends Components.DocumentFront, HTMLStencilElement {
    }
    var HTMLDocumentFrontElement: {
        prototype: HTMLDocumentFrontElement;
        new (): HTMLDocumentFrontElement;
    };
    interface HTMLElementTagNameMap {
        "camera-preview": HTMLCameraPreviewElement;
        "document-back": HTMLDocumentBackElement;
        "document-front": HTMLDocumentFrontElement;
    }
}
declare namespace LocalJSX {
    interface CameraPreview {
        "onPhotoTaked"?: (event: CameraPreviewCustomEvent<string>) => void;
    }
    interface DocumentBack {
    }
    interface DocumentFront {
    }
    interface IntrinsicElements {
        "camera-preview": CameraPreview;
        "document-back": DocumentBack;
        "document-front": DocumentFront;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "camera-preview": LocalJSX.CameraPreview & JSXBase.HTMLAttributes<HTMLCameraPreviewElement>;
            "document-back": LocalJSX.DocumentBack & JSXBase.HTMLAttributes<HTMLDocumentBackElement>;
            "document-front": LocalJSX.DocumentFront & JSXBase.HTMLAttributes<HTMLDocumentFrontElement>;
        }
    }
}
