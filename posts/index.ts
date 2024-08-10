import { randomBytes } from "crypto";
import express, { Request, Response } from "express";
import cors from "cors";


interface Post {
  id: string;
  title: string;
}

const main = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  const PORT = 4000;

  const posts: Record<string, Post> = {};

  app.get("/posts", (req: Request, res: Response) => {
    res.send(posts);
  });

  app.post("/posts", async (req: Request, res: Response) => {
    try { 
      const id = randomBytes(4).toString("hex");
      const { title } = req.body;

      if (!title) {
        return res.status(400).send({ error: "Title is required" });
      }

      posts[id] = { id, title };

      // await fetch("http://localhost:4005/events", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     type: "PostCreated",
      //     data: posts[id],
      //   }),
      // });
      
      console.log(posts[id]);
      res.status(201).send(posts[id]);
    } catch (error) {
      res.status(500).send({ error: "Internal Server Error" });
    }
  });

  
  app.listen(PORT, () => {
    console.log(`[+] POSTS SERVER ACTIVE: http://localhost:${PORT}`);
  });
};
main();
