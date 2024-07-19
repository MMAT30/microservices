import { randomBytes } from 'crypto';
import express, { Request, Response } from 'express';


const main = () => {
    const app = express()
    const PORT = 3000

    const posts = {}

    app.get('/posts', (req: Request, res: Response) => {
        res.send(posts)
    })

    app.post('/posts', (req: Request, res: Response) => {
        const id = randomBytes(4).toString('hex')
        const { title } = req.body;


        posts[id] = {
            id, title
        }

        res.status(201).send(posts[id])
    })

    app.listen(PORT, () => {
        console.log(`[+] SERVER ACTIVE: http://localhost:${PORT}`)
    })
} 
main()