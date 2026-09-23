import { useEffect } from 'react';

/**
 * Observes all `img.lazy-img` and `video.lazy-img` elements in the DOM,
 * adding the `is-loaded` class once each element finishes loading.
 * This removes the skeleton shimmer defined in CSS.
 *
 * Call this hook once per page/component that contains `.lazy-img` elements.
 */
export default function useLazyImgSkeleton() {
    useEffect(() => {
        const markLoaded = (el: Element) => el.classList.add('is-loaded');

        const imgs = document.querySelectorAll<HTMLImageElement>('img.lazy-img');
        const videos = document.querySelectorAll<HTMLVideoElement>('video.lazy-img');

        const imgHandlers: Array<[HTMLImageElement, () => void]> = [];
        imgs.forEach((img) => {
            if (img.complete && img.naturalWidth > 0) {
                markLoaded(img);
            } else {
                const handler = () => markLoaded(img);
                img.addEventListener('load', handler, { once: true });
                imgHandlers.push([img, handler]);
            }
        });

        const videoHandlers: Array<[HTMLVideoElement, () => void]> = [];
        videos.forEach((video) => {
            if (video.readyState >= 2) {
                markLoaded(video);
            } else {
                const handler = () => markLoaded(video);
                video.addEventListener('loadeddata', handler, { once: true });
                videoHandlers.push([video, handler]);
            }
        });

        return () => {
            imgHandlers.forEach(([el, h]) => el.removeEventListener('load', h));
            videoHandlers.forEach(([el, h]) => el.removeEventListener('loadeddata', h));
        };
    }, []);
}
