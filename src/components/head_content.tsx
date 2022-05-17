import React from 'react'
import Head from 'next/head'

import { SITE_NAME } from './const'

type HeadContentType = {
  title?: string,
  description?: string
  keywords?: string[],
  url?: string
}
const DEFAULT_TITLE = 'Homepage - Love Beautiful Code'
const DEFAULT_DESCRIPTION = 'Masahito Osako\'s Homepage'
const DEFAULT_KEYWORDS = ['']
const DEFAULT_URL = 'https://www.ito-spo.com/'
const HeadContent: React.FC<HeadContentType> = ({ title, description, keywords, url }) => {
  if (!title) title = DEFAULT_TITLE
  if (!description) description = DEFAULT_DESCRIPTION
  if (!keywords || !keywords.length) keywords = DEFAULT_KEYWORDS
  if (!url) url = DEFAULT_URL

  const og_type: string = url == DEFAULT_URL ? 'website' : 'article'

  return (
    <Head>
      <meta charSet="utf-8"></meta>

      <title>{title}</title>
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join()} />

      <meta name="viewport" content="width=device-width,user-scalable=yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Cache-Control" content="no-cache" />
      <meta http-equiv="Expires" content="Thu, 01 Dec 1994 16:00:00 GMT" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon-precomposed" href="/apple-icon.png"></link>

      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={og_type} />
      <meta property="og:url" content={url} />
      {/* <meta property="og:image" content="http://selfull-cms.com/selfulldata/images/ogimage.png" /> */}
      <meta property="og:site_name" content={SITE_NAME} />
    </Head>
  )
}
export default HeadContent
