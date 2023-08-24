import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PostsService from '@/services/posts-service'
import { HeaderPost } from './components/header-post'
import { PostContent } from './components/content-post'

interface IUser {
  id: number
  login: string
}

export interface IPost {
  id: number
  title: string
  body: string
  created_at: string
  user: IUser
  comments: number
  html_url: string
}

export function Post() {
  const { id } = useParams()

  const [post, setPost] = useState({} as IPost)
  const [isLoading, setIsLoading] = useState(false)

  const getPost = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await PostsService.getById(id as string)
      console.log(response)
      setPost(response)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <>
      <HeaderPost post={post} isLoading={isLoading} />
      <PostContent content={post.body} />
    </>
  )
}
