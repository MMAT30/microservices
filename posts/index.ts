import express, { Request, Response } from 'express';


const main = () => {
    const app = express()
    const PORT = 3000


    app.get('/', (req: Request, res: Response) => {
        res.send('Hello World!')
    })

    app.listen(PORT, () => {
        console.log(`[+] SERVER ACTIVE: http://localhost:${PORT}`)
    })
} 
main()