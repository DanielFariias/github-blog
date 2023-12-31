import HttpClient from './http-client'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

interface IPostsService {
  httpClient: HttpClient
}

class PostsService implements IPostsService {
  httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('https://api.github.com')
  }

  async getByQuery(query: string = '') {
    return this.httpClient.get(
      `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`,
    )
  }

  async getById(id: string) {
    return this.httpClient.get(`/repos/${username}/${repoName}/issues/${id}`)
  }

  async getUser() {
    return this.httpClient.get(`/users/${username}`)
  }
}

export default new PostsService()
