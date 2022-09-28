import Link from 'next/link'
import React from 'react'
import { useGlobal } from '@/lib/global'

const CategoryList = ({ currentCategory, categories }) => {
  if (!categories) {
    return <></>
  }
  const { locale } = useGlobal()

  return <ul className='flex py-2 pb-12 space-x-3'>
    <Link href={`../`} passHref>
    <li className='cursor-pointer duration-200 mr-1 my-1 pl-5 px-1 py-1 font-medium text-3xl whitespace-nowrap text-gray-300 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-700 '>전체</li>
    </Link>
   {categories.map(category => {
      const selected = category.name === currentCategory
      return (
        <Link key={category.name} href={`/category/${category.name}`} passHref>
          <li
            className={`cursor-pointer duration-200 mr-1 my-1 px-1.5 py-1 font-medium text-3xl whitespace-nowrap
                 ${selected
                ? 'text-gray-700 dark:hover:text-gray-300 dark:text-gray-300'
                : 'text-gray-300 hover:text-gray-700 dark:hover:text-gray-300  dark:text-gray-700'
              }`}
          >
            <a>
              {`${category.name}`}
            </a>
          </li>
        </Link>)
    })}
  </ul>
}

export default CategoryList
