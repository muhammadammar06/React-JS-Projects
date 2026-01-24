import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  let [length, setLength] = useState(10);
  let [charAllowed, setCharAllowed] = useState(false);
  let [numbersAllowed, setNumbersAllowed] = useState(false);
  let [password, setPassword] = useState("");

  // Use Ref Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numbersAllowed]);

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numbersAllowed]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
        
        <h1 className="text-3xl font-bold text-center text-white">
          Password Generator
        </h1>

        {/* Password Output */}
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-[80%] px-3 py-2 rounded-lg bg-gray-700 text-orange-400 font-mono text-lg outline-none"
          />
          <button className="border py-2 px-3 rounded-xl text-black bg-white font-bold h-full text-lg overflow-hidden cursor-pointer" onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        {/* Length Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-white text-sm">
            <label htmlFor="rangeInput">Length</label>
            <span>{length}</span>
          </div>
          <input
            type="range"
            name="rangeInput"
            defaultValue={10}
            min={10}
            max={20}
            onChange={(e) => setLength(e.target.value)}
            className="w-full cursor-pointer accent-orange-500"
          />
        </div>

        {/* Options */}
        <div className="flex items-center justify-between text-white text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            Characters
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="numberInput"
              onChange={() => setNumbersAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            Numbers
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;