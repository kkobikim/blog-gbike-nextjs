import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import formatDate from '@/lib/formatDate'
import BLOG from '@/blog.config'

export default function HeaderArticle({ post, siteInfo }) {
  if (!post) {
    return <></>
  }
  const headerImage = post?.page_cover ? `url("${post.page_cover}")` : `url("${siteInfo?.pageCover}")`

  const { locale } = useGlobal()
  const date = formatDate(
    post?.date?.start_date || post?.createdTime,
    locale.LOCALE
  )

  return (
    <div
      id="header"
      className="w-full h-view-top relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: headerImage }}
    >
      <header className="bg-black bg-opacity-40 absolute top-0 w-full h-view-top py-10 flex justify-center items-end font-sans">
        <div className='mb-4'>
          {/* 文章Title */}
                  <div className="pb-5 font-thin text-gray-300 dark:text-white flex justify-center">
                    {post.category}
                  </div>
             
          <div className="font-light text-3xl flex justify-center text-white dark:text-white font-Myeongjo">
            {post.title}
          </div>

          <section className="flex-wrap flex text-m justify-center mt-10 text-gray-400 dark:text-gray-400 font-thin leading-8">
            
            <div className='flex justify-center'>
              {post?.type[0] !== 'Page' && (
                <>
                    <a className="pl-1 mr-2">
                     {date}
                    </a>
                </>
              )}
            </div>
            {BLOG.ANALYTICS_BUSUANZI_ENABLE && <div className="busuanzi_container_page_pv font-light mr-2">
            </div>}
          </section>
        </div>
      </header>
    </div>
  )
}
