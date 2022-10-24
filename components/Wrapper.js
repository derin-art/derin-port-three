import Header from "./header";

export default function Wrapper(props) {
  return (
    <div className="h-full w-full">
      <div>
        <Header></Header>
      </div>

      <div className="w-full h-full">{props.children}</div>
    </div>
  );
}
