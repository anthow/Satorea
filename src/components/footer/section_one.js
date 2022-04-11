import React from "react";

const Sectionone = () => {
  return (
    <article className=" col-span-2 w-10/12">
      <h4 className="text-2xl font-black mb-5">Alt title 4</h4>
      <form className="flex w-max">
        <input type="text" className="border p-2" />
        <input type="submit" className=" bg-secondary-color hover:bg-fourth-color text-white p-2" />
      </form>
    </article>
  );
};

export default Sectionone;
