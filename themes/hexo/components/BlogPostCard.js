import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'
import TagItemMini from './TagItemMini'
import CONFIG_HEXO from '../config_hexo'
import NotionPage from '@/components/NotionPage'

const BlogPostCard = ({ post, showSummary }) => {
  const showPreview = CONFIG_HEXO.POST_LIST_PREVIEW && post.blockMap
  return (
    <Link href={`${BLOG.SUB_PATH}/article/${post.slug}`} passHref>
    <div className="w-ful cursor-pointer duration-300">
      <div
        key={post.id}
        className="animate__animated animate__fadeIn flex flex-row justify-between duration-300 "
      >
        <div className="p-4 flex flex-col w-full">
              <a className="cursor-pointer my-2 font-light text-gray-500 dark:text-gray-300 text-sm transform">
                {post.category}
              </a>
            <a
              className={`replace cursor-pointer text-2xl font-sans ${showPreview ? 'text-center' : ''
                } leading-tight text-gray-600 dark:text-gray-100`}
            >
              {post.title}
            </a>

          {(!showPreview || showSummary) && !post.results && (
            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical' }}
              className="replace max-h-32 my-2 text-gray-500  dark:text-gray-300 text-m font-light leading-7">
              {post.summary}
            </p>
          )}

          {/* 搜索结果 */}
          {post.results && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7">
              {post.results.map(r => (
                <span key={r}>{r}</span>
              ))}
            </p>
          )}

            <div
            className={`flex mt-2 items-center ${showPreview ? 'justify-center' : 'justify-start'
              } flex-wrap dark:text-gray-500 text-gray-400`}
             >
              <a className="font-light cursor-pointer text-sm leading-4 mr-3">
                {post.date?.start_date || post.lastEditedTime}
              </a>
          </div>

          {showPreview && (
            <div className="overflow-ellipsis truncate">
              <NotionPage post={post} />
            </div>
          )}

          <div className="text-gray-400 justify-between flex">
          
            <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
              <div>
                {' '}
                {post.tagItems.map(tag => (
                  <TagItemMini key={tag.name} tag={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>

            <div className="flex max-w-xs w-96 relative duration-200 rounded-lg cursor-pointer transform  hover:-translate-y-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post?.page_cover}
                alt={post.title}
                className="max-w-xs max-h-52 h-44 w-full rounded-lg transform object-cover duration-200 hover:shadow-xl"
              />
              {/* <Image className='hover:scale-125 rounded-t-xl lg:rounded-r-xl lg:rounded-t-none transform duration-500' src={post?.page_cover} alt={post.title} layout='fill' objectFit='cover' loading='lazy' /> */}
            </div>
     
      </div>
    </div></Link>
  )
}

export default BlogPostCard
