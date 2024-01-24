"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {

  const [answer, setAnswer] = useState(""); 
  const [prompt, setPrompt] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-800 p-12 gap-4">
      
      {/*  Answer */}
      <div className="flex flex-1 bg-slate-700 border border-slate-600 rounded-lg w-3/4">
        {answer}
      </div>

      {/*  Input */}
      <textarea
        className="bg-slate-700 border border-slate-600 rounded-lg p-4 w-3/4 break-all"
        placeholder="Enter your text here"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      {/*  Button */}
      <div>
        <button
          className="bg-slate-700 border border-slate-600 rounded-lg p-4"
          onClick={async () => {
            //console.log(prompt)
            //const res = await axios.post("http://localhost:8000/generate", JSON.stringify({ prompt }))
            //console.log(res.data)
            setAnswer("This " + prompt + " is a test.");
          }}
        >
          Generate
        </button>
      </div>

    </main>
  );
}
