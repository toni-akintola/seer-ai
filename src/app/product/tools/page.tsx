'use client'
import { MicrophoneIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import { AudioLinesIcon, FileIcon } from 'lucide-react'
import React, { useState } from 'react';

const links = [
  //   { name: 'Record', href: '#', icon: <MicrophoneIcon className="h-8 w-8 text-black" /> },
  {
    name: 'Convert video files to audio',
    href: 'https://cloudconvert.com/mp3-converter',
    icon: <AudioLinesIcon className='h-8 w-8 text-black' />,
  },
  {
    name: 'Compress a file',
    href: 'https://www.compress2go.com/compress-video',
    icon: <FileIcon className='h-8 w-8 text-black' />,
  },
]

export default function Tools() {
  const [url, setUrl] = useState('');

   const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

     const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token d1604d2dae71371b6122ccd9fd50fa2144e5add5'
  },
  body: JSON.stringify({url: 'https://dpgr.am/spacewalk.wav'})
};

const response = await fetch('https://api.deepgram.com/v1/listen?model=nova-2-general&version=latest&summarize=v2&detect_topics=true', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  };

   const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUrl(event.currentTarget.value);
  };
   return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="url"
          name="url"
          id="url"
          value={url}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

