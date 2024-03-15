export default function Card({notebook} : { notebook?: Notebook }) {
  // TODO: Fetch notebook 'Last Updated' when implemented on backend
  const lastUpdated = '';
  const href = `notebooks/${notebook?.id}/`

  return (
    <a key={notebook?.id} href={href} className="card md:w-full min-w-[250px]">
      <div className="flex flex-col pl-2 pt-2 ">
        <span>
          <h1 
            title={notebook?.title}
            className="text-lg font-bold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis w-min max-w-[95%]"
          >
            {notebook?.title}
          </h1>
        </span>

        <span className="basis-16">
          <p
            title={notebook?.description}
            className="font-normal text-sm text-secondary overflow-hidden break-all paragraph-wrap-3 max-w-[95%]"
          >
            {notebook?.description}
          </p>
        </span>

        <p className="basis-4 font-thin text-xs text-faded tracking-tight text-gray-400">
          {lastUpdated}
        </p>
      </div>
    </a>
  )
}