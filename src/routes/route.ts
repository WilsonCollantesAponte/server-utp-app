import express, { Request, Response } from "express";
import DataBaseInteraction from "../../prisma";
const router = express.Router();

router.post("/newPost", async (req: Request, res: Response) => {
  // const { image, data, postScope } = req.body;
  // const { title, description } = data;
  // const {
  //   architecture,
  //   industrialEngineering,
  //   systemsEngineering,
  //   civilEngineering,
  // } = postScope;

  const response = await DataBaseInteraction.post.create({
    include: {
      postScope: true,
    },
    data: {
      title: "sss",
      description: "sss",
      image: [""],
      postScope: {
        create: {
          systemsEngineering: true,
          civilEngineering: true,
          industrialEngineering: true,
          architecture: true,
        },
      },
    },
  });

  return res.json(response);
});

export default router;
