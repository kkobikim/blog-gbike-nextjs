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
      className="w-full h-96 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: headerImage }}
    >
      <header className="bg-black bg-opacity-50 absolute top-0 w-full h-96 py-10 flex justify-center items-center font-sans">
        <div className='mt-24'>
          {/* 文章Title */}
                  <div className="cursor-pointer flex justify-center">
                    {post.category}
                  </div>
             
          <div className="font-bold text-xl shadow-text flex justify-center text-white dark:text-white font-sans">
            {post.title}
          </div>

          <section className="flex-wrap shadow-text flex text-sm justify-center mt-2 text-white dark:text-gray-400 font-light leading-8">
            
            <div className='flex justify-center'>
              {post?.type[0] !== 'Page' && (
                <>
                  <Link
                    href={`/archive#${post?.date?.start_date?.substr(0, 7)}`}
                    passHref
                  >
                    <a className="pl-1 mr-2 cursor-pointer hover:underline">
                      {locale.COMMON.POST_TIME}: {date}
                    </a>
                  </Link>
                </>
              )}
              <div className="pl-1 mr-2">
                {locale.COMMON.LAST_EDITED_TIME}: {post.lastEditedTime}
              </div>
            </div>
            {BLOG.ANALYTICS_BUSUANZI_ENABLE && <div className="busuanzi_container_page_pv font-light mr-2">
            </div>}
          </section>
        </div>
      </header>
    </div>
  )
}
