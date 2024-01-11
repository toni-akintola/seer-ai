import { MicrophoneIcon } from "@heroicons/react/24/solid"
import { AudioLinesIcon, FileIcon } from "lucide-react"

const links = [
//   { name: 'Record', href: '#', icon: <MicrophoneIcon className="h-8 w-8 text-black" /> },
  { name: 'Convert video files to audio', href: 'https://cloudconvert.com/mp3-converter', icon: <AudioLinesIcon className="h-8 w-8 text-black" /> },
  { name: 'Compress a file', href: 'https://www.compress2go.com/compress-video', icon: <FileIcon className="h-8 w-8 text-black" /> }
]


export default function Example() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32 items-center justify-center flex h-screen">
     
      <div
        aria-hidden="true"
      >
        
      </div>
      <div
        aria-hidden="true"
      >
      
      </div>
      <div className="mx-auto max-w-7xl p-6 lg:p-20 bg-white rounded-md shadow-lg ">
        <div className="mx-auto max-w-2xl lg:mx-0 flex items-center flex-col">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Tools</h2>
          
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} className="flex flex-row space-x-3" href={link.href}>
                <p>{link.name}</p> {link.icon}
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}
