import './App.css';
import { useState } from 'react';

function highlightPhases(output) {
  // Remove lines of only equal signs and highlight phase headers
  return output
    .split('\n')
    .filter(line => !/^=+$/.test(line.trim()))
    .map(line => {
      const phaseMatch = line.match(/^(PHASE [0-9]+: .+|PHASE [A-Z ]+)/);
      if (phaseMatch) {
        return `<span class="phase-header">${line}</span>`;
      }
      return line;
    })
    .join('\n');
}

function App() {
  const [code, setCode] = useState(
`int main() {
    int a = 2, b = 3;
    int c = a + b * 4;
    return c;
}`
  );
  const [output, setOutput] = useState('');

  const handleCompile = async () => {
    setOutput('Compiling...');
    const res = await fetch('http://localhost:5000/compile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    const data = await res.json();
    setOutput(data.output || data.error || 'No output');
  };

  return (
    <div>
      <div className="header">⚡ Tiny  Compiler ⚡</div>
      <div className="container">
        <div className="editor">
          <div style={{marginBottom: '1rem', fontWeight: 'bold'}}>Code Editor</div>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="output">
          <div style={{marginBottom: '1rem', fontWeight: 'bold'}}>Output</div>
          <pre style={{color: '#00ffe7', fontSize: '1.1rem'}} dangerouslySetInnerHTML={{__html: highlightPhases(output).replace(/\n/g, '<br/>')}} />
        </div>
      </div>
      <div className="compile-btn-row">
        <button onClick={handleCompile}>Compile</button>
      </div>
      <div className="footer">
        Made by GEEKS  | PBL 2025 | <a href="https://github.com/ritingusain" style={{color:'#00ffe7'}}>GitHub</a>
      </div>
    </div>
  );
}

export default App;
