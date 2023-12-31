type props = {
  children: JSX.Element | JSX.Element[] | String;
};

function Container({ children }: props) {
  return (
    <div className="select-none z-10 max-h-[100vh] flex flex-col w-[90%] mx-auto px-1">
      {children}
    </div>
  );
}

export default Container;
