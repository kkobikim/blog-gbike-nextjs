import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return <Link key={tag} href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`} passHref>
    <a className={`cursor-pointer border-solid border-1 border-black inline-block rounded-3xl hover:bg-gray-100 dark:hover:text-white  hover:text-white duration-200
      mr-2 text-base whitespace-nowrap text-gray-700 hover:shadow-xl dark:border-gray-400 notion-white_background` }>
    <div className='font-light px-4 py-2'>{selected && <i className='mr-1 fa-tag'/>} {tag.name + (tag.count ? `(${tag.count})` : '')} </div>
    </a>
  </Link>
}

export default TagItemMini
