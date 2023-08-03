export const Home = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <h1 className="text-7xl text-center dark:text-white font-bold">
              RememCRM
            </h1>
          </div>
          <div className="col-span-1"></div>

          <div className="col-span-1"></div>
          <div className="col-span-1 mb-5">
            <h2 className="text-center dark:text-white text-4xl font-light">
              Simple, intuitive customer management software.
            </h2>
          </div>
          <div className="col-span-1"></div>

          <div className="col-span-1"></div>
          <div className="col-span-1 flex justify-center">
            <img src="/images/RememLogo.svg" className=" w-72" />
          </div>
          <div className="col-span-1"></div>

          <div className="col-span-1"></div>
          <div className="col-span-1 mt-5">
            <div className="flex justify-center">
              <p className="text-5xl font-semibold  dark:text-white">
                Built for{" "}
              </p>
              <p className="text-5xl ml-2 font-bold text-sky-500">YOU.</p>
            </div>
          </div>
          <div className="col-span-1"></div>

          <div className="col-span-3 text-center w-full bg-slate-600 h-44 p-5 mt-5">
            <p className="text-white text-4xl">Hi there, we're RememCRM.</p>
            <p className="text-white text-xl p-4 font-light">
              Here at RememCRM, we're devoted to offering funeral professionals
              all of the tools they need to best serve their families. Our
              software empowers you to better connect with real people across
              all communication channels. Additionally, we understand your time
              is valuable and we want you to make the most of it. Thank you for
              choosing us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
