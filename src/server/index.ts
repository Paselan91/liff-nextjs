import fs from 'fs'
import https from 'https'
import express, { Request, Response } from 'express'
import next from 'next'

const port = process.env.PORT || 3000
// const host = '0.0.0.0'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

;(async () => {
  try {
    await app.prepare()
    const expressApp = express()
    expressApp.all('*', (req: Request, res: Response) => {
      return handle(req, res)
    })

    const hasCertificates =
      fs.existsSync('./https/certificates/localhost-key.pem') &&
      fs.existsSync('./https/certificates/localhost.pem')
    const useHttps = process.env.HTTPS === 'true' && hasCertificates

    if (useHttps) {
      const options = {
        cert: fs.readFileSync('./https/certificates/localhost.pem'),
        key: fs.readFileSync('./https/certificates/localhost-key.pem'),
      }

      const server = https.createServer(options, expressApp)
      server.listen(port, (err?: any) => {
        if (err) throw err
        console.log(`> Ready on https localhost:${port} - env ${process.env.NODE_ENV}`)
      })
    } else {
      expressApp.listen(port, (err?: any) => {
        if (err) throw err
        console.log(`> Ready on http localhost:${port} - env ${process.env.NODE_ENV}`)
      })
    }
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
