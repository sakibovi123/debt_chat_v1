const Header = () => {

  const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleString('en-us', { weekday: 'long' });
    const date = currentDate.toLocaleDateString();
  return (
    <div className={"max-w-[900px] mx-auto mt-6"}>
      <p className={"text-center font-serif text-slate-700 font-bold px-2 text-md sm:text-lg  "}>
        <span className={"text-red-600"}>Warning:</span> registration closes on {dayOfWeek}, {date} at midnight.
      </p>
      <h1 className={"text-center text-slate-700 font-bold px-2 text-xl sm:text-3xl mt-2"}>
        Debt Settlement Program: Discover your eligibility to receive over
        $10,000 in debt relief.
      </h1>
      <p className={"flex gap-2 items-center justify-center text-slate-700 mt-4 text-sm"}>
        <span className={"relative flex h-4 w-4 mt-[2px]"}>
          <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}></span>
          <span className={"relative inline-flex rounded-full h-4 w-4 bg-green-500"}></span>
        </span>
        Evelyn is online
      </p>
    </div>
  );
};
export default Header;
