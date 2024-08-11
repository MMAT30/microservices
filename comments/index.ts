import { randomBytes } from "crypto";
import express, { Request, Response } from "express";
import cors from "cors";

interface Comment {
  id: string;
  content: string;
}

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 4001;

const comments: Record<string, Comment> = {};

app.get("/posts/:id/comments", async (req: Request, res: Response) => {
  res.send(comments[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req: Request, res: Response) => {
  const id = randomBytes(4).toString("hex");
  const {postId, content } = req.body;

  if (!content) {
    return res.status(400).send({ error: "Title is required" });
  }


  

  comments[postId] = { id, content };

  await fetch("http://localhost:4005/events", {
    method: "POST",
    body: JSON.stringify({
      type: "CommentCreated",
      data: comments[postId],
    }),
  });

  res.status(201).send(comments[postId]);
});




app.listen(PORT, () => {
  console.log(`[+] COMMENTS SERVER ACTIVE: http://localhost:${PORT}`);
});
