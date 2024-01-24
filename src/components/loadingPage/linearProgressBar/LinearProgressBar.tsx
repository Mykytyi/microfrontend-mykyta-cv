import './LinearProgressBar.css';
interface LinearProgressBar {
  percent: number;
  fontSize?: number;
  animateTiming?: number;
}
const LinearProgressBar: React.FC<LinearProgressBar> = (props) => {
  return (
    <div className="LinearProgressBar">
      <div className={"emptyProgressBar"} style={{ width: "100%" }}>
        <div
          className={"fillingProgressBar"}
          style={{
            left: props.percent - 100 + "%",
            transition: "1s"
          }}
        />
      </div>
    </div>
  );
};

export default LinearProgressBar;
