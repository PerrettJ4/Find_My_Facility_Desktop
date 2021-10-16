import React from "react";
// https://api.findmyfacility.com/api-docs/

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col justify-center items-center text-center">
        <header className="h-10 flex flex-col justify-center">
          {" "}
          <h1 className="text-white font-MO">Star Wars Pairs!</h1>{" "}
        </header>
        <main className="h-96 w-96 bg-indigo-800">{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
