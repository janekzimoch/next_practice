import { useState } from "react";
import SubmitContact from '../components/submitContact';
import { Button } from 'react-bootstrap';

const TEXT_DISPLAY_DEFAULT = 'Query data first...';

function ResponseDisplay() {
  const [display, setDisplay] = useState(false);
  const [displayedText, setDisplayedText] = useState(TEXT_DISPLAY_DEFAULT);

  async function onShowHide() {
    if (display) {
      setDisplayedText(TEXT_DISPLAY_DEFAULT)
    }
    else {
      await fetch("http://localhost:3002/api/contacts", { method: "GET" }).then(async (res) => {
        const json_res = await res.json()
        setDisplayedText(json_res);
      }
      ).catch((err) => {
        console.error(err);
      })
    }
    setDisplay(!display);
  }

  return (
    <div className='ml-20 mr-20 w-1/2'>
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
      <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={typeof displayedText === 'string' ? displayedText : JSON.stringify(displayedText)} /> 
      <button onClick={onShowHide} className="bg-slate-500 hover:bg-slate-700 text-white py-1 px-2  rounded m-2">
        {display ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export default function Home() {
  // form to add users
  return (
    <div>
      <SubmitContact />
      <ResponseDisplay />
    </div>
  );
}
