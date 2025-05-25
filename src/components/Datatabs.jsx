function Datatabs() {
  return (
    <div className="flex absolute top-20 left-5 h-0 bg-background">

    {/* Left group: notifications, Dark mode toggle, location */}
        <button className=" ml-5 top-7 items-center justify-center ">
          <span className="text-base text-third_text font-light">Today</span>
        </button>
        <button className=" ml-4 top-7 items-center justify-center ">
        <span className="text-base text-third_text font-light">Tommorow</span>
        </button>
        <button className=" ml-5 top-7 items-center justify-center ">
        <span className="text-base text-secondary_text font-medium">Next 7 Days</span>
        </button>

    </div>
  );
}

export default Datatabs;
