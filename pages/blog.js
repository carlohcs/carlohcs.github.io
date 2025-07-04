import { useContext,useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import { getAllPosts } from '../components/helpers/blog-utils'
import { createMarkup } from '../components/helpers/create-markup'
import { AppContext } from '../components/providers/AppProvider'
import { useGetPageMetaContent } from '../hooks/use-get-page-meta-content'
import { Main } from '../layouts/main'

import './blog.css'

const cleanExcerpt = (excerpt) => {
  const markup = createMarkup(excerpt)

  return markup
}

const Blog = ({ posts: initialPosts, metaContent }) => {
  const [posts] = useState(initialPosts || [])
  const [loading, setLoading] = useState(!initialPosts)

  const { getMessage } = useContext(AppContext)

  useEffect(() => {
    if (!initialPosts) {
      // Fallback for client-side if no SSG posts are available
      setLoading(false)
    }
  }, [initialPosts])

  if (loading) {
    return (
      <div className="blog-container">
        <div className="loading">
          <p>{getMessage('blog', 'loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Main metaContent={metaContent}>
        <div className="blog-container container">
          <div className="posts-grid">
            {posts.map((post, index) => (
              <a href={`/blog/${post.slug}`} key={`${post.slug}-${index}`} className="post-link">
                <article key={post.slug} className="post-card">
                  <div className="post-meta">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                    <span className="read-time">{post.readTime}</span>
                    {/* {post.source === 'medium' && (
                        <span className="source-badge">Medium</span>
                      )} */}
                  </div>

                  <h2 className="post-title">
                    {post.title}
                  </h2>

                  <p className="post-excerpt" dangerouslySetInnerHTML={cleanExcerpt(post.excerpt)} />

                  <span className="read-more">
                    {getMessage('page', 'readMore')}
                  </span>
                </article>
              </a>
            ))}
          </div>
        </div>

      </Main>
    </>
  )
}

Blog.propTypes = {
  posts: PropTypes.array,
  metaContent: PropTypes.object
}

Blog.defaultProps = {
  posts: [],
  metaContent: {}
}

// Função para gerar os posts estaticamente no build time
export async function getStaticProps() {
  try {
    const posts = getAllPosts()
    const metaContent = useGetPageMetaContent('blog')

    return {
      props: {
        posts,
        metaContent
      },
      // Revalida a cada 24 horas se estiver em modo ISR
      revalidate: 86400
    }
  } catch (error) {
    console.error('Erro ao carregar posts:', error)

    return {
      props: {
        posts: []
      }
    }
  }
}

export default Blog
