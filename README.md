# Nextjs + TypeScript + ChakuraUI

- Nextjs 12.3
- Reactjs 18.2
- Chakra-UI 2.3.4

## Build & up Contaier

- フロントエンドとの疎通用ネットワークを作成

```zsh
docker network create myqpp
```

- イメージビルド & 立ち上げ

```zsh
docker compose up --build
```

## GraphQL 型定義の自動生成

バックエンドの schema に基づき、FE の types を自動生成します

1. Local で BE のコンテナを起動
1. make gqlgen を実行
   src/types/generated/graphql.ts に必要な type が生成される（※編集はしない）

## E2E テスト

2022 11/22 現在、動作してません。導入のみです

## トラブルシューティング

- ブラウザに 422 エラーが出た場合
  -> GraphQL 定義と実際のリクエストの定義が一致していない可能性があります。  
  バックエンド`src/graph/schema/{対象のモデル}`と  
  フロントエンド`src/graphql/queries/**/query.ts or mutation.ts`  
  の定義に差異がないか確認して下さい。

```
Server Error
Error: Response not successful: Received status code 422

This error happened while generating the page. Any console logs will be displayed in the terminal window.
```

例) 以下の場合 422 エラーになります

```graphql
# 定義(src/graphql/schema/post/post.graphql)
fetchPostById(post_id: Int!): Post!

# リクエスト(src/graphql/queries/post/query.ts)
export const FETCH_POST_BY_ID = gql`
  query fetchPostById($id: Int!) {
    fetchPostById(id: $id) {        # <- post_idとすべきとろこ、idになってしまっている
      id
      title
      body
      image_url
      is_public
      user {
        id
        user_sub_id
      }
    }
  }
`
```
