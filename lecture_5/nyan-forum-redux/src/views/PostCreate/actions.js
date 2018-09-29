import { db } from '../../firebase';

export const createPost = (data) => {
  return async (dispatch) => {
    const { boardId, author, title, content } = data;
    const newPostRef = db.collection('posts').doc();
      
    await newPostRef.set({
      id: newPostRef.id,
      author,
      title,
      content,
      comments: []
    });

    const boardSnapshot = await db.collection('boards').doc(boardId).get();
    const postsByBoard = boardSnapshot.data().posts;
    await db.collection('boards').doc(boardId).update({
      posts: [
        ...postsByBoard,
        newPostRef.id
      ]
    });
  }
}