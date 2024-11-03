import "./App.css";
import { sampleText } from "./sampleText";
import { marked } from "marked";
import { useState, useEffect,useMemo } from "react";
 
function App() {

  // Récupérer la valeur initiale de `text` depuis le localStorage, ou utiliser `sampleText` si elle est absente
  const initialText = localStorage.getItem("text") || sampleText;
  const [text, setText]= useState(initialText);

    // Utiliser useEffect pour sauvegarder le texte dans localStorage chaque fois que `text` change
    useEffect(() => {
      localStorage.setItem("text", text);
    }, [text]);

  const parsedMarkdown = useMemo(() => {
    const sanitizedText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return marked.parse(sanitizedText); 
  }, [text]);


  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-6">
        <textarea
            rows="35"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col-sm-6">
          <div dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
        </div>
      </div>
    </div>
  )
}

export default App
