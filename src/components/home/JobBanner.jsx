const JobBanner = () => {
  return (
      <div className="relative pt-16 mb-10 px-2 md:px-12 mt-20">

        <div
          className="absolute inset-0 bg-[#4640DE]"
          style={{
            clipPath:
              "polygon(4% 0, 100% 0, 100% 75%, 96% 100%, 0 100%, 0 15%)",
          }}
        />

        <div className="relative h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 px-2 md:px-14">

          <div className="text-white max-w-md ">
            <h1 className="font-clashDisplay text-center md:text-left text-3xl md:text-5xl font-semibold leading-tight mb-7">
              Start posting <br /> jobs today
            </h1>

            <p className="text-[16px] font-epilogue font-medium mb-8 text-center md:text-left">
              Start posting jobs for only $10.
            </p>

            <button className="w-full md:w-auto bg-white text-[#4640DE] text-[16px] font-semibold px-6 py-3 shadow">
              Sign Up For Free
            </button>
          </div>

          <div className="relative">
            <img
              src={'https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?semt=ais_hybrid&w=740&q=80'}
              alt="dashboard"
              className="w-150 h-85 rounded-lg shadow-lg border border-purple-300 object-cover"
            />
          </div>
        </div>
      </div>
  )
}

export default JobBanner