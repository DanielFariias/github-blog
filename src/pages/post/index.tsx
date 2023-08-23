import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PostsService from '@/services/posts-service'
import { HeaderPost } from './components/header-post'

interface IUser {
  id: number
  login: string
}

interface IPost {
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

  const getPost = useCallback(async () => {
    try {
      const response = await PostsService.getById(id as string)
      console.log(response)
      setPost(response)
    } catch (error) {
      console.log(error)
    }
  }, [id])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <HeaderPost
      title={post.title}
      username={post?.user?.login}
      commentsAmount={post.comments}
      createdAt={post.created_at}
      postUrl={post.html_url}
    />
  )
}
