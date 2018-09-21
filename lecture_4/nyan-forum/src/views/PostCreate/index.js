import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import Button from '../../components/Button';

class BoardCreate extends React.Component {

  state = {
    author: '',
    title: '',
    content: ''
  }

  handleChange = (type) => (e) => {
    this.setState({
      [type]: e.target.value
    });
  }

  // 새 post 생성하기
  handleSubmit = async (e) => {
    // form 태그 내부에 button을 클릭하면 자동으로 요청을 생성하게 되므로 기본 행동을 preventDefault() 메소드로 취소합니다.
    e.preventDefault();
    const confirm = window.confirm('정말로 등록하시겠습니까?'); // 컨펌 메시지를 표출하고, 그 결과를 confirm에 boolean값으로 할당합니다

    if (confirm) { // 만약 confirm이 true일 경우
      // 현재 url의 boardId를 가져옵니다
      const { boardId } = this.props.match.params;
      const { author, title, content } = this.state;
  
      // posts 컬렉션에 새로운 document의 reference를 생성합니다
      const newPostRef = db.collection('posts').doc();
      
      // 유저가 입력한 값을 통해 새로운 document를 생성합니다
      await newPostRef.set({ // set() 메소드를 통해 새 document를 생성합니다
        id: newPostRef.id, // reference의 id를 id에 할당할 수 있습니다
        author,
        title,
        content,
        comments: []
      });
  
      // 새 post를 생성했기 때문에, 해당 post를 boards의 posts에 추가해야합니다.
      // boardId를 통해 db의 boards 컬렉션에서 해당 document를 가져옵니다 => documentSnapshot이 반환됩니다
      const boardSnapshot = await db.collection('boards').doc(boardId).get();
      const postsByBoard = boardSnapshot.data().posts;
      await db.collection('boards').doc(boardId).update({ // update() 메소드를 통해 해당 board document를 업데이트합니다
        posts: [
          ...postsByBoard,
          newPostRef.id // 새 post의 id를 추가합니다
        ]
      });
  
      alert('성공적으로 등록되었습니다');
      this.props.history.goBack(); // 새 post 완료 후 이전 페이지로 돌아갑니다. 이때 history.goBack() 메소드를 활용할 수 있습니다.
    }
  }

  render() {
    const { author, title, content } = this.state;
    return (
      <Wrapper>
        <Form>
          <Nickname>
            <Label>닉네임</Label>
            <Input value={author} onChange={this.handleChange('author')} />
          </Nickname>
          <Title>
            <Label>제목</Label>
            <Input value={title} onChange={this.handleChange('title')} />
          </Title>
          <Content>
            <Label>내용</Label>
            <Textarea value={content} onChange={this.handleChange('content')} />
          </Content>
          <Button onClick={this.handleSubmit}>글 쓰기</Button>
        </Form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 4rem;
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #fff;
`;

const Form = styled.form`
  text-align: center;
`;

const Nickname = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.div`
  margin-bottom: 4rem;
`;

const Content = styled.div`
  margin-bottom: 4rem;
`;

const Label = styled.div`
  text-align: left;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  font-family: 'NanumSquare';
  box-sizing : border-box;
  height: 4rem;
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 0rem;
  padding-left: 1rem;
  font-size: 1.6rem;
  color: #333;
`;

const Textarea = styled.textarea`
  resize: none;
  font-family: 'NanumSquare';
  box-sizing : border-box;
  width: 100%;
  height: 15rem;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 3px;
  font-size: 1.6rem;
  color: #333;
  padding: 1rem;
`;

export default BoardCreate;