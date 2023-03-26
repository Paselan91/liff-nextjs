# Liff app

- Next.js 12.3
- React.js 18.2
- Chakra-UI 2.3.4

## Set up

1. Copy env

```zsh
cp .env.exapmle .env.local
```

2. Create self-certificates on your local machine for using https
   Run below commands on shell

```zsh
openssl req \
   -newkey rsa:2048 \
   -x509 \
   -nodes \
   -keyout localhost-key.pem \
   -new \
   -out localhost.pem \
   -subj /CN=localhost \
   -reqexts SAN \
   -extensions SAN \
   -config <(cat /etc/ssl/openssl.cnf \
       <(printf '[SAN]\nsubjectAltName=DNS:localhost,IP:192.168.0.1')) \
   -sha256 \
   -days 3650
```

then, created 2 files

- localhost.pem
- localhost-key.pem

move these files

```zsh
mkdir -p https/certificates
```

```zsh
mv localhost-key.pem localhost.pem https/certificates
```

2. register LIFF ID to `NEXT_PUBLIC_LIFF_ID`
   ref: <https://zenn.dev/jiyuujin/books/react-x-vite-x-liff/viewer/page3>

3. Build and up container

```zsh
docker compose up --build
```
