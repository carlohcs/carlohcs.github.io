import { useContext } from 'react'

import PropTypes from 'prop-types'

import { getAllPosts, getPostBySlug, getPostImage } from '../../components/helpers/blog-utils'
import { getBuildTimeData } from '../../components/helpers/build-time-data'
import { formatDate } from '../../components/helpers/date'
import { getImageUrl } from '../../components/helpers/get-image-url'
import { AppContext } from '../../components/providers/AppProvider'
import { messages } from '../../etc/messages'
import { useGetHost } from '../../hooks/use-get-host'
import { Main } from '../../layouts/main'

import './blog-post.css'

const PostMeta = ({ post }) => {
  return (
    <div className="post-meta">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span className="read-time">{post.readTime}</span>
    </div>
  )
}

PostMeta.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired
  }).isRequired
}

const PostComeBack = () => {
  const { getMessage } = useContext(AppContext)

  return (
    <nav className="breadcrumb">
      <a href="/blog" className="back-to-blog">
        {getMessage('blog', 'comeBack')}
      </a>
    </nav>
  )
}

const BlogPost = ({ post }) => {
  const { getMessage } = useContext(AppContext)

  if (!post) {
    return (
      <div className="post-container">
        <div className="not-found">
          <h1>{getMessage('blog', 'notFoundTitle')}</h1>
          <p>{getMessage('blog', 'notFoundDescription')}</p>
          <a href="/blog">{getMessage('blog', 'comeBack')}</a>
        </div>
      </div>
    )
  }

  return (
    <>
      <Main
        metaContent={post.metaContent}
        customTitle={post.title}
        customTitleDescription={<PostMeta post={post} />}
        customDescription={<PostComeBack />}>
        <div className='projects'>
          <div className='project'>
            <article className="post-container">
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <footer className="post-footer">
                <div className="post-actions">
                  <a href="/blog" className="back-to-blog">
                    {getMessage('blog', 'comeBack')}
                  </a>

                  {post.originalUrl && (
                    <a
                      href={post.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-original"
                    >{getMessage('blog', 'seeOriginalPost')}
                    </a>
                  )}
                </div>
              </footer>
            </article>
          </div>
        </div>
      </Main>
    </>
  )
}

BlogPost.propTypes = {
  post: PropTypes.object
}

BlogPost.defaultProps = {
  post: null
}

// Generates static paths for all existing posts
export async function getStaticPaths() {
  const posts = getAllPosts()

  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: false // 404 for non-existing slugs
  }
}

export async function getStaticProps({ params }) {
  const host = useGetHost()
  const buildTimeData = getBuildTimeData()
  const isBuildData = !!buildTimeData
  const posts = isBuildData ? buildTimeData.posts : getAllPosts()

  const post = getPostBySlug(params.slug) || posts.find(p => p.slug === params.slug)

  if (!post) {
    return { notFound: true }
  }

  const image = `${host}${getImageUrl(`blog/meta/${post.slug}.png`) || getPostImage(post)}`

  post.metaContent = {
    title: `${post.title} | Blog ${messages['en'].page.titleSuffix}`,
    description: post.excerpt,
    image,
    imageAlt: post.title
  }

  return {
    props: {
      post
    },
    revalidate: 86400
  }
}

export default BlogPost
