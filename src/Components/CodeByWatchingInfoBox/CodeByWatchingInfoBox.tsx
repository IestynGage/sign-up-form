import "./CodeByWatchingInfoBox.css";

export interface CodeByWatchingInfoBoxProps {
  /** the class name of the info Box */
  className?: string;
}

/**
 * Component to display text about the product
 */
export default function CodeByWatchingInfoBox({
  className,
}: CodeByWatchingInfoBoxProps) {
  return (
    <div>
      <div className={className ? className + " mainDiv" : "mainDiv"}>
        <h1 className="heading"> Learn to code by watching others</h1>
        <p className="depthExplanation">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
    </div>
  );
}
