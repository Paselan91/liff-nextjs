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