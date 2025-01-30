// import React, { useState, useEffect } from 'react';
// import { Controlled as CodeMirror } from 'react-codemirror2';
// import { useNavigate } from 'react-router-dom';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css'; 
// import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/xml/xml';
// import 'codemirror/mode/css/css';
// import 'codemirror/addon/hint/show-hint';
// import 'codemirror/addon/hint/javascript-hint';
// import 'codemirror/addon/hint/html-hint';
// import 'codemirror/addon/hint/css-hint';
// import 'codemirror/addon/hint/show-hint.css';
// import './CodeEditor.css'; 
// import FileTree from './FileTree'; 
// import mockFileSystem from './mockFileSystem'; 

// const CodeEditor = () => {
//   const [code, setCode] = useState('');
//   const [language, setLanguage] = useState('javascript'); 
//   const [theme] = useState('material'); 
//   const [output, setOutput] = useState(''); 
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     const savedCode = localStorage.getItem('code');
//     if (savedCode !== null) {
//       setCode(savedCode);
//     }
//   }, []);

//   const handleLanguageChange = (e) => {
//     setLanguage(e.target.value);
//     setOutput(''); 
//   };

//   const runCode = () => {
//     let result = '';
//     if (language === 'javascript') {
//       try {
//         result = eval(code);
//         setOutput(result !== undefined ? result.toString() : '');
//       } catch (error) {
//         setOutput(error.toString());
//       }
//     } else if (language === 'xml' || language === 'css') {
//       const iframe = document.createElement('iframe');
//       iframe.style.display = 'none';
//       document.body.appendChild(iframe);
//       const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
//       iframeDocument.open();
//       iframeDocument.write(language === 'xml' ? code : `<style>${code}</style>`);
//       iframeDocument.close();
//       result = iframeDocument.body.innerHTML;
//       document.body.removeChild(iframe);
//       setOutput(result);
//     } else {
//       setOutput(''); 
//     }
//   };

//   const saveCode = () => {
//     localStorage.setItem('code', code);
//     alert('Code saved successfully!');
//   };

//   return (
//     <div className="flex h-screen bg-white">
//       <div className="w-1/6 bg-gray-200">
//         <FileTree files={mockFileSystem} />
//       </div>
//       <div className="flex flex-col w-5/6 p-4">
//         <div className="flex mb-4">
//           <button className="mr-2 bg-gray-200 p-2" onClick={saveCode}>Save</button>
//           <button className="bg-gray-200 p-2" onClick={runCode}>Run</button>
//           <select onChange={handleLanguageChange} value={language} className="ml-2 p-2">
//             <option value="javascript">JavaScript</option>
//             <option value="xml">HTML</option>
//             <option value="css">CSS</option>
//           </select>
//           <button className="ml-auto bg-gray-200 p-2" onClick={() => navigate('/')}>Back to Builder</button>
//         </div>
//         <div className="code-editor-wrapper flex-grow" style={{ height: 'calc(100vh - 96px)', overflow: 'auto' }}> 
//           <CodeMirror
//             value={code}
//             options={{
//               mode: language,
//               theme: theme,
//               lineNumbers: true, 
//               extraKeys: { "Ctrl-Space": "autocomplete" }, 
//               styleActiveLine: true, 
//               lineWrapping: true, 
//             }}
//             onBeforeChange={(editor, data, value) => {
//               setCode(value);
//             }}
//             editorDidMount={(editor) => {
//               editor.refresh(); 
//             }}
//           />
//         </div>
//         <div className="mt-4">
//           <h3>Output:</h3>
//           <div className="bg-gray-100 p-4">
//             <iframe
//               title="Output"
//               sandbox="allow-scripts"
//               style={{ width: '100%', height: '200px', border: 'none' }}
//               srcDoc={language === 'xml' || language === 'css' ? code : ''}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;





import React, { useState, useEffect } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useNavigate } from 'react-router-dom';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/html-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/hint/show-hint.css';
import './CodeEditor.css';
import FileTree from './FileTree';
import mockFileSystem from './mockFileSystem';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedCode = localStorage.getItem('code');
    if (savedCode !== null) {
      setCode(savedCode);
    }
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setOutput('');
  };

  const runCode = () => {
    let result = '';
    if (language === 'javascript') {
      try {
        result = eval(code);
        setOutput(result !== undefined ? result.toString() : '');
      } catch (error) {
        setOutput(error.toString());
      }
    } else if (language === 'xml' || language === 'css') {
      setOutput(code);
    } else {
      setOutput('');
    }
  };

  const saveCode = () => {
    localStorage.setItem('code', code);
    alert('Code saved successfully!');
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/6 bg-gray-200">
        <FileTree files={mockFileSystem} />
      </div>
      <div className="flex flex-col w-5/6 p-4">
        <div className="flex mb-4">
          <button className="mr-2 bg-gray-200 p-2" onClick={saveCode}>Save</button>
          <button className="bg-gray-200 p-2" onClick={runCode}>Run</button>
          <select onChange={handleLanguageChange} value={language} className="ml-2 p-2">
            <option value="javascript">JavaScript</option>
            <option value="xml">HTML</option>
            <option value="css">CSS</option>
          </select>
          <button className="ml-auto bg-gray-200 p-2" onClick={() => navigate('/')}>Back to Builder</button>
        </div>
        <div className="code-editor-wrapper flex-grow" style={{ height: 'calc(100vh - 96px)', overflow: 'auto' }}>
          <CodeMirror
            value={code}
            options={{
              mode: language,
              lineNumbers: true,
              extraKeys: { "Ctrl-Space": "autocomplete" },
              styleActiveLine: true,
              lineWrapping: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
            editorDidMount={(editor) => {
              editor.refresh();
            }}
          />
        </div>
        <div className="mt-4">
          <h3>Output:</h3>
          <div className="bg-gray-100 p-4">
            {language === 'xml' || language === 'css' ? (
              <iframe
                title="Output"
                sandbox="allow-scripts"
                style={{ width: '100%', height: '200px', border: 'none' }}
                srcDoc={code}
              />
            ) : (
              <pre>{output}</pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
