# 냥포럼

본 애플리케이션은 react-router를 활용하여 클라이언트 사이드 라우팅을 구현하고, firestore와 연동하여 데이터베이스를 연동했습니다. 

## 라우팅 구조

본 앱은 다음과 같은 라우팅 구조를 가집니다.

```
- App
  - Landing
  - Board
    - PostList
    - PostCreate
    - PostDetail
    - CommentCreate
```

## firestore db model

본 앱의 데이터베이스 모델은 다음과 같습니다. 한 개의 board 문서는 여러개의 post 문서를 가질 수 있습니다. 또, 한 개의 post 문서는 여러개의 comment 문서를 가질 수 있습니다.

```
boards

- id: string
- name: string
- posts: array[postId]
```

```
posts

- id: string
- author: string
- title: string
- content: string
- comments: array[commentId]
```

```
comments

- id: string
- author: string
- content: string
```