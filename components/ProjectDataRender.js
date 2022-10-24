export default function ProjectDataRender({
  OverView,
  Scope,
  Execution,
  Stack,
  Name,
}) {
  return (
    <div className="flex sm:flex-row flex-col sm:p-8 mr-8 sm:mr-0 font-Abril lg:max-h-96 sm:max-h-fit  max-h-96 overflow-y-auto sm:min-w-full lg:text-base text-sm">
      <div className="font-Abril p-2 sm:max-h-96 h-fit sm:overflow-y-auto">
        <div className="font-Ezcar text-lg border-b border-black">
          Over View
        </div>
        {OverView}
      </div>
      <div className="sm:max-h-96 sm:overflow-y-auto p-2">
        <div>
          {" "}
          <div className="font-Ezcar mb-4 text-lg border-b border-black">
            Planning
          </div>
          <div className="font-Ezcar">Scope</div>
          <div>{Scope}</div>
        </div>
        <div>
          <div className="font-Ezcar mt-2">Execution</div>
          <div>{Execution}</div>
        </div>
      </div>
      <div className="p-2">
        {" "}
        <div className="font-Ezcar text-lg border-b border-black">Stack</div>
        {Stack.map((items) => (
          <div>{items}</div>
        ))}
      </div>
    </div>
  );
}
