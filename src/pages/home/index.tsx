import { useEffect, useState } from 'react'
import { HeaderCard } from './components/header-card'
import { SearchForm } from './components/search-form'

import * as S from './styles'
import { PostCard } from './components/post-card'
import postsService from '@/services/posts-service'
import { Spinner } from './components/spinner'

interface IPost {
  id: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function getPost(query: string = '') {
    try {
      setIsLoading(true)
      const response = await postsService.getByQuery(query)

      setPosts(response.items)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <S.Container>
      <HeaderCard />
      <SearchForm amountPublications={posts.length} />

      {isLoading && <Spinner spacingTop />}
      {!isLoading && (
        <S.CardList>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.body}
              createdAt={post.created_at}
            />
          ))}
        </S.CardList>
      )}
    </S.Container>
  )
}
