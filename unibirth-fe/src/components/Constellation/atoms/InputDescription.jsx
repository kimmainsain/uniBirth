import React from "react";

const Dropdown = ({ stelladescp, setStelladescp }) => {
  // const [inputStella, setinputStella] = useState("Option 1");

  return (
    <div className="flex h-10 flex-col items-center justify-center rounded-lg border-double font-TAEBAEKmilkyway">
      <input
        className="jsutify-center flex h-96 flex-row items-center rounded-full border-4"
        type="text"
        value={stelladescp}
        onChange={(e) => setStelladescp(e.target.value)}
      />
    </div>
  );
};

export default Dropdown;
