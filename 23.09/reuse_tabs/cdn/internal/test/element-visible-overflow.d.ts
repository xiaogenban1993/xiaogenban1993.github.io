/**
 * Given a parent element featuring `overflow: hidden` and a child element inside the parent, this
 * function determines whether the child will be visible taking only the overflow of the parent into account
 * Id does NOT check whether it is hidden or overlapped by another element
 * It basically checks whether the bounding rects of the parent and the child overlap
 *
 * @param {HTMLElement} outerElement - The parent element
 * @param {HTMLElement} innerElement - the child element
 * @returns {Boolean} whether the two elements overlap
 */
export declare const isElementVisibleFromOverflow: (outerElement: Element, innerElement: Element) => boolean;
