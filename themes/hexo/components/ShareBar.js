import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import React from 'react'
import { createPopper } from '@popperjs/core'
import copy from 'copy-to-clipboard'
import QRCode from 'qrcode.react'
import { useGlobal } from '@/lib/global'


const ShareBar = ({ post }) => {
  const router = useRouter()
  const shareUrl = BLOG.LINK + router.asPath

  // 二维码悬浮

  const { locale } = useGlobal()


  const copyUrl = () => {
    copy(shareUrl)
    alert(locale.COMMON.URL_COPIED)
  }

  return <>
    <div
      className='py-2 text-gray-500 text-center space-x-2 flex my-1 dark:text-gray-200'>
   
      <div className='cursor-pointer text-2xl'>
        <a className='text-yellow-600' onClick={copyUrl} >
          <i className='fas fa-link'/>
        </a>
      </div>
    </div>
  </>
}
export default ShareBar
