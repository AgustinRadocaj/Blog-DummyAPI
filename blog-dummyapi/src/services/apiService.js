import axios from 'axios'

const apiId = import.meta.env.VITE_API_ID;

const apiService = axios.create({
    baseURL: `https://dummyapi.io/data/v1`,
    headers: {
        'Content-Type': 'application/json',
        'app-id': apiId,
    },
})  

export const getPosts = async() => {
    try {
        const response = await apiService.get('/post?limit=21')
        const posts = response.data
        return posts
    } catch (error) {
        console.log('error al obtener los posts', error)
    }
}

export const getPostsByTag = async(tag) => {
    try {
        const response = await apiService.get(`/tag/${tag}/post?limit=21`)
        const posts = response.data
        return posts
    } catch (error) {
        console.log('error al obtener los posts', error)
    }
}


export const getUsers = async() => {
    try {
        const response = await apiService.get('/user?limit=21')
        const users = response.data
        return users
    } catch (error) {
        console.log('error al obtener los posts', error)
    }
}