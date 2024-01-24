import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function App({ src, style, alt }) {
  return (
    <div>
      <LazyLoadImage src={src} className={style} alt={alt} effect="blur" />
    </div>
  );
}
