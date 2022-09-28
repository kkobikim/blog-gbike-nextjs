import React from 'react'
import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import CONFIG_HEXO from '../config_hexo'

const MenuButtonGroupTop = (props) => {
  const { customNav } = props
  const { locale } = useGlobal()

  let links = [
    { icon: '', name: locale.COMMON.MAIN, to: '/', show: CONFIG_HEXO.MENU_MAIN },
    { icon: '', name: locale.COMMON.ARTICLE, to: '/archive', show: CONFIG_HEXO.MENU_ARCHIVE },
    { icon: 'fas fa-search', name: '', to: '/search', show: CONFIG_HEXO.MENU_SEARCH }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  return <nav id='nav' className='leading-8 flex justify-center font-sans font-light w-full'>
    {links.map(link => {
      if (link.show) {
        return <Link key={`${link.to}`} title={link.to} href={link.to} >
          <a target={link.to.indexOf('http') === 0 ? '_blank' : '_self'} className={'py-1.5 my-1 px-3 duration-300 text-base justify-center items-center rounded-md hover:bg-gray-100 cursor-pointer'} >
            <div className='w-full flex text-sm items-center justify-center transform'>
              <i className={`${link.icon} mr-1 pt-1 pl-1`}/>
              <div className='text-center font-medium pr-2'>{link.name}</div>
            </div>
          </a>
        </Link>
      } else {
        return null
      }
    })}
  </nav>
}
export default MenuButtonGroupTop
