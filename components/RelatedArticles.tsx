import { posts, type Post } from '@/app/blog/posts'
import styles from './RelatedArticles.module.css'

type Props = {
  currentSlug: string
  limit?: number
}

export default function RelatedArticles({ currentSlug, limit = 3 }: Props) {
  const current = posts.find((p) => p.slug === currentSlug)
  const others = posts.filter((p) => p.slug !== currentSlug)

  // Same-tag posts first, then fill with others
  const sameTag = current ? others.filter((p) => p.tag === current.tag) : []
  const otherTag = current ? others.filter((p) => p.tag !== current.tag) : others
  const related: Post[] = [...sameTag, ...otherTag].slice(0, limit)

  if (related.length === 0) return null

  return (
    <aside className={styles.related} aria-label="Related articles">
      <h2 className={`${styles.heading} serif`}>Continue Reading</h2>
      <ul className={styles.grid}>
        {related.map((post) => (
          <li key={post.slug} className={styles.card}>
            <a href={`/blog/${post.slug}`} className={styles.cardLink}>
              <span className={styles.cardTag}>{post.tag}</span>
              <h3 className={`${styles.cardTitle} serif`}>{post.title}</h3>
              <span className={styles.cardArrow}>Read article →</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
