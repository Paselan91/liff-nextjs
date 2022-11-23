# Nextjs + TypeScript + ChakuraUI
- Nextjs 12.3
- Reactjs 18.2
- Chakra-UI 2.3.4

## Build & up Contaier
- フロントエンドとの疎通用ネットワークを作成
```zsh
docker network create myqpp
```
- BEイメージビルド & 立ち上げ
```zsh
docker compose up --build
```

## GraphQLの型定義
1. src/graphql/queries 配下
    - 必要なオペレーションを /query, /mutation に定義
      ```graphql
      # 例）src/graphql/queries/user/query.ts
      export const FETCH_ALL_USERS = gql` # FETCH_ALL_USERS はフロントで使用する名称（UPPER_SNAKEケースで好きな変数名で定義する）
        query fetchUserById($id: ID!) {   # fetchUserById($id: ID!) はそれぞれバックエンドで定義されているものと同一にする
          fetchUserById(id: $id) {
            id                            # フロントで必要なフィールドを定義する
            mail_address
            posts{
              id
            }
            created_at
          }
        }
      `
      ```
1. src/graphql/schema 配下
    - 既存の schema をディレクトリごと削除
    - バックエンドの src/graph/schema をディレクトリごとコピーして貼り付け
1. make gql-gen を実行
src/types/generated/graphql.ts に必要なtypeが生成される（※編集はしない）

## E2Eテスト
2022 11/22現在、動作してません。導入のみです

## トラブルシューティング
- ブラウザに422エラーが出た場合
-> GraphQL定義と実際のリクエストに乖離が生じている可能性があります。
`src/graphql/schema`と`src/graphql/queries/**/query.ts or mutation.ts`を確認して下さい。
```
Server Error
Error: Response not successful: Received status code 422

This error happened while generating the page. Any console logs will be displayed in the terminal window.
```
例) 以下の場合422エラーになります
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