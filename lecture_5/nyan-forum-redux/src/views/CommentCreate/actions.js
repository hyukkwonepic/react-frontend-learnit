import { db } from '../../firebase';

export const createComment = (data) => {
  return async (dispatch) => {
    const { postId, author, content } = data;

    const newCommentRef = db.collection('comments').doc();
    await newCommentRef.set({
      id: newCommentRef.id,
      author,
      content,
    });

    const postSnapshot = await db.collection('posts').doc(postId).get();
    const commentsByPost = postSnapshot.data().comments;
    await db.collection('posts').doc(postId).update({
      comments: [
        ...commentsByPost,
        newCommentRef.id
      ]
    });
  }
}