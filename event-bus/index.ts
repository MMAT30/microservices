import express, { Request, Response } from "express";
import cors from "cors";

const main = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  const PORT = 4005;

  app.post("/events", async (req: Request, res: Response) => {
    const { event } = req.body;

    await fetch("http://localhost:4000/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await fetch("http://localhost:4001/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    await fetch("http://localhost:4002/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.send({ status: "OK" });
  });

  app.listen(PORT, () => {
    console.log(`[+] EVENT BUS ACTIVE: http://localhost:${PORT}`);
  });
};
main();
