import Image from "next/image";
const page = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen font-mono text-xs px-16">
      <div className="flex flex-col-reverse gap-16 md:flex-row w-full md:w-1/2 md:justify-between justify-center">
        <div className="flex flex-col gap-4 justify-center w-fit mx-auto">
          <h1 className="text-center"><span className="text-green-600">whoami</span>@nouser:~$</h1>
          <span className="p-2 rounded-md border-red-500 bg-transparent border text-red-500 w-fit mx-auto">website is being developed</span>
        </div>
        <Image src={`/imgs/developer.png`} className="mx-auto" alt="image-error" height={200} width={200} />
      </div>
    </div>
  )
};

export default page;
