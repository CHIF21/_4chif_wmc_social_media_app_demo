export default interface IPost {
    id: Date,
    username: string,
    title: string,
    text: string,
    likes: number,
    dislikes: number,
    comments: string[]
}