import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import BlogPostListPage from './components/BlogPostListPage'
import LayoutBase from './LayoutBase'
import SearchInput from './components/SearchInput'
import { useGlobal } from '@/lib/global'
import Card from './components/Card'
import Link from 'next/link'

export const LayoutSearch = props => {
  const { keyword, categories } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const currentSearch = keyword || router?.query?.s
  const cRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      // 自动聚焦到搜索框
      cRef?.current?.focus()
      if (currentSearch) {
        const targets = document.getElementsByClassName('replace')
        for (const container of targets) {
          if (container && container.innerHTML) {
            const re = new RegExp(`${currentSearch}`, 'gim')
            container.innerHTML = container.innerHTML.replace(
              re,
              `<span class='text-red-500 border-b border-dashed'>${currentSearch}</span>`
            )
          }
        }
      }
    }, 100)
  })
  return (
    <LayoutBase {...props} currentSearch={currentSearch}>
      <div className="my-6 px-2">
        <SearchInput cRef={cRef} {...props} />
        {/* 分类 */}
        <Card className="w-full mt-4">
          <div id="category-list" className="duration-200 flex flex-wrap mx-8">
            {categories?.map(category => {
              return (
                <Link
                  key={category.name}
                  href={`/category/${category.name}`}
                  passHref
                >
                  <div
                    className={
                      ' duration-300 dark:hover:text-white rounded-lg px-5 cursor-pointer py-2 hover:bg-indigo-400 hover:text-white'
                    }
                  >
                    {category.name}
                  </div>
                </Link>
              )
            })}
          </div>
        </Card>
      </div>
      <div id="container">
        <BlogPostListPage {...props} />
      </div>
    </LayoutBase>
  )
}
