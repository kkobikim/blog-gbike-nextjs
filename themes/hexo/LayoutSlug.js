import { getPageTableOfContents } from 'notion-utils'
import { useRef } from 'react'
import { ArticleLock } from './components/ArticleLock'
import HeaderArticle from './components/HeaderArticle'
import JumpToCommentButton from './components/JumpToCommentButton'
import TocDrawer from './components/TocDrawer'
import TocDrawerButton from './components/TocDrawerButton'
import LayoutBase from './LayoutBase'
import NotionPage from '@/components/NotionPage'
import TagItemMini from './components/TagItemMini'
import RecommendPosts from './components/RecommendPosts'
import ArticleAdjacent from './components/ArticleAdjacent'
import { isBrowser } from '@/lib/utils'

export const LayoutSlug = props => {
  const { post, recommendPosts, lock, validPassword, showArticleInfo } = props

  if (!post) {
    return <LayoutBase
      headerSlot={<HeaderArticle {...props} />}
      {...props}
      showCategory={false}
      showTag={false}
    ></LayoutBase>
  }

  if (!lock && post?.blockMap?.block) {
    post.content = Object.keys(post.blockMap.block)
    post.toc = getPageTableOfContents(post, post.blockMap)
  }

  const drawerRight = useRef(null)
  const targetRef = isBrowser() ? document.getElementById('container') : null

  const floatSlot = <>
    {post?.toc?.length > 1 && <div className="block lg:hidden">
      <TocDrawerButton
        onClick={() => {
          drawerRight?.current?.handleSwitchVisible()
        }}
      />
    </div>}
    <JumpToCommentButton />
  </>

  return (
    <LayoutBase
      headerSlot={<HeaderArticle {...props} />}
      {...props}
      showCategory={false}
      showTag={false}
      floatSlot={floatSlot}
    >
      <div className="w-full lg:px-2 lg:py-4">
        {lock && <ArticleLock password={post.password} validPassword={validPassword} />}

        {!lock && <div id="container" className="overflow-x-auto max-w-screen-md flex-grow mx-auto md:w-full md:px-5 ">

          <article itemScope itemType="https://schema.org/Movie" className="subpixel-antialiased" >
            {/* Notion文章主体 */}
            <section id='notion-article' className='px-5 justify-center mx-auto max-w-2xl lg:max-w-full'>
              {post && <NotionPage post={post} />}
            </section>

            <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
              <div>
                {' '}
                {post.tagItems.map(tag => (
                  <TagItemMini key={tag.name} tag={tag} />
                ))}
              </div>
            </div>
            {showArticleInfo && <>
            <RecommendPosts currentPost={post} recommendPosts={recommendPosts} />
            <ArticleAdjacent {...props} />
            </>}
          </article>


          {/* 评论互动 */}
        
        </div>}
      </div>

      <div className='block lg:hidden'>
        <TocDrawer post={post} cRef={drawerRight} targetRef={targetRef} />
      </div>

    </LayoutBase>
  )
}
