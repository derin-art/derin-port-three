import Header from "./header";

export default function Wrapper(props) {
  return (
    <div className="h-full w-full bg-white">
      <div>
        <Header></Header>
      </div>

      <div className="w-full h-full bg-white ">{props.children}</div>
    </div>
  );
}
