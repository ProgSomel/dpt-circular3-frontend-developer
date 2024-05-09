import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

  return (
    <div>
      {/* From Upper Part  */}
      <div>
        <h1 className="max-w-5xl mx-auto mt-1 font-bold text-xl">
          Master Price
        </h1>

        <hr />
        {/*! Trip Type Section  */}
        <div className="flex justify-center mt-3 mb-4 max-w-5xl mx-auto border-b py-5 border-blue-400 font-bold text-xl">
          <button className="border px-2 font-bold border-black text-xs">
            Round Trip
          </button>
          <button className="border px-2 font-bold border-black bg-blue-900 text-white text-xs ">
            One Way
          </button>
          <button className="border px-2 font-bold border-black text-xs ">
            Multi City
          </button>
        </div>

        {/* Trip Details Selection Section  */}
        <div className="max-w-5xl mx-auto mt-1 flex  gap-5 border-b py-5 border-blue-400">
          <div className="flex gap-4">
            <button className="border pl-1 pr-16 border-black py-1">LHR</button>
            <button className="border pl-1 pr-16 border-black py-1 bg-blue-100">
              CDG
            </button>
          </div>
          {/* date  */}
          <input
            className="border  border-black px-2 bg-blue-100"
            type="date"
            value="2024-05-09"
          />

          {/* day select Option  */}
          <select className="border pl-1 pr-5 border-black py-1">
            <option selected value="Day-">
              Day-{" "}
            </option>
          </select>
          <select className="border pl-1 pr-5 border-black py-1">
            <option selected value="Day-">
              Day+{" "}
            </option>
          </select>
          <select className="border pl-1 pr-5 border-black py-1">
            <option selected value="Day-">
              Anytime{" "}
            </option>
          </select>
          <p>+</p>
          <select className="border pl-1 pr-5 border-black py-1">
            <option selected value="Day-">
              ADT{" "}
            </option>
          </select>
          <select className="border pl-1 pr-5 border-black py-1">
            <option selected value="Day-">
              1{" "}
            </option>
          </select>
          <p>+</p>
        </div>

        {/* Serach button area  */}
        <div className="flex justify-between items-center max-w-5xl mx-auto border-b py-5 border-blue-400">
          {/* 1st part  */}
          <div className="flex gap-1 items-center font-bold text-xs">
            <input type="checkbox" value="" />
            <p>Extra Option</p>
          </div>
          {/* second part  */}
          <div className="flex gap-1 items-center font-bold text-xs">
            <h1>Environment</h1>
            <input type="radio" id="option1" name="options" value="option1" />
            <label>Dummy</label>
            <br />

            <input type="radio" id="option2" name="options" value="option2" />
            <label>PDT</label>
            <br />
          </div>

          {/* search Button  */}
          <div className="">
            <button className="btn bg-blue-950 rounded-sm px-3 text-xs font-bold text-white py-2">
              SEARCH
            </button>
          </div>
        </div>
      </div>




    </div>
  );
}

export default App;
