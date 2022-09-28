import Link from 'next/link'
import CONFIG_HEXO from '../config_hexo'

/**
 * 上一篇，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleAdjacent ({ prev, next }) {
  if (!prev || !next || !CONFIG_HEXO.ARTICLE_ADJACENT) {
    return <></>
  }
  return <section className='text-gray-800 items-center text-xs md:text-sm flex justify-between m-1 '>
    <Link href={`/article/${prev.slug}`} passHref>
      <a className='py-1  cursor-pointer hover:underline justify-start items-center dark:text-white flex w-full h-full duration-200'>
        <i className='mr-1 fas fa-angle-left' />{prev.title}
      </a> 
    </Link>
    <img
                src={prev?.page_cover}
                alt={prev.title}
                className=" max-h-52 h-44 w-full rounded-2lg transform object-cover duration-200"
              />
    <Link href={`/article/${next.slug}`} passHref>
      <a className='py-1 cursor-pointer hover:underline justify-end items-center dark:text-white flex w-full h-full duration-200'>{next.title}
        <i className='ml-1 my-1 fas fa-angle-right' />
      </a>
    </Link>
    <img
                src={next?.page_cover}
                alt={next.title}
                className=" max-h-52 h-44 w-full rounded-2lg transform object-cover duration-200"
              />
              
  </section>
}
