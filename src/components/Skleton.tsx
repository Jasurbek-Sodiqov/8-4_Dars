function Skleton() {
  const mas: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-[1440px] mx-auto mt-10 flex flex-wrap gap-6 justify-center mb-10">
      {mas.map((a: number) => {
        return (
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-105  duration-300"
            key={a}
          >
            <div className="flex flex-col gap-4 w-[384px] shadow-md">
              <div className="skeleton h-48 w-full"></div>
              <div className="p-2 flex flex-col gap-2">
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-16"></div>
              </div>
              <div className="w-full flex justify-end ml-[-10px] mb-[10px]">
                <div className="skeleton w-12 h-16"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skleton;
