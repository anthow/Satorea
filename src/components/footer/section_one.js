import React from "react";

const Sectionone = () => {
  return (
    <article className=" col-span-2 w-10/12">
      <h4 className="text-2xl font-black text-white mb-5">Abonne-toi à ma newsletter
<br/>pour ne rien rater</h4>
      <form className="flex w-max">
        <input type="text" className="border rounded-l-xl p-2" />
        <input type="submit" className=" bg-secondary-color hover:bg-fourth-color rounded-r-xl text-white p-2" />
      </form>
    </article>
  );
};

export default Sectionone;
