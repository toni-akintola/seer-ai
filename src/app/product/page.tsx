import { DocumentTextIcon, PencilSquareIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { ArrowDownCircleIcon, CpuChipIcon, HomeModernIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

type Props = {}

const items = [
  { name: "New Summary", href: "/product/new-summary", icon: <PencilSquareIcon className='h-8 w-8 text-white'/> }, { name: "Summaries", href: "", icon: <DocumentTextIcon className='w-8 h-8 text-white' /> },
  { name: "About", href: "/hero", icon: <QuestionMarkCircleIcon className='h-8 w-8 text-white'/>, }
]


const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const Product = (props: Props) => {
  return (
    <div className='bg-gray-100 col-span-4 border grid h-screen grid-cols-4'>
      <div className="mx-auto grid max-w-2xl col-span-2 justify-center px-6 m-4 py-4 shadow-lg border border-gray-300 rounded-lg">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Transcript</h2>
          <p className=" text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
      </div>
       <div className="mx-auto grid max-w-2xl col-span-2 justify-center px-6 m-4 py-4 shadow-lg border border-gray-300 rounded-lg">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Summary</h2>
          <p className=" text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
      </div>
    </div>
  )
}

export default Product