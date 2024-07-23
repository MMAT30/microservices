import { randomBytes } from "crypto";
import express, { Request, Response } from "express";

interface Post {
  id: string;
  title: string;
}

const main = () => {
  const app = express();
  app.use(express.json());
  const PORT = 4001;

  const posts: Record<string, Post> = {};

  app.get("/posts", (req: Request, res: Response) => {
    res.send(posts);
  });

  app.post("/posts", async (req: Request, res: Response) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;

    if (!title) {
      return res.status(400).send({ error: "Title is required" });
    }

    posts[id] = { id, title };

    await fetch("http://localhost:4005/events", {
      method: "POST",
      body: JSON.stringify({
        type: "CommentCreated",
        data: posts[id],
      }),
    });

    res.status(201).send(posts[id]);
  });
  app.listen(PORT, () => {
    console.log(`[+] COMMENTS SERVER ACTIVE: http://localhost:${PORT}`);
  });
};
main();
