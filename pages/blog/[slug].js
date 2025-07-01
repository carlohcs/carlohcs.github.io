import PropTypes from 'prop-types'
import { getAllPosts, getPostBySlug } from '../../components/helpers/blog-utils'
import { Main } from '../../layouts/main'
import { useContext } from 'react'
import { AppContext } from '../../components/providers/AppProvider'
import { formatDate } from '../../components/helpers/date'

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

// Gets the post data by slug
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)

  return {
    props: {
      post: post || null
    },
    revalidate: 86400
  }
}

export default BlogPost
