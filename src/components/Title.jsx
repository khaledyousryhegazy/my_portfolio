function Title({ main, title }) {
  return (
    <div className=" px-6">
      <h1 className="main_title ">{main}</h1>
      <h1 className="text-3xl mb-5 font-bold capitalize text-blackColor">
        {title}
      </h1>
    </div>
  );
}

export default Title;
