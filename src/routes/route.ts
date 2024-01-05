import express, { Request, Response } from "express";
import DataBaseInteraction from "../../prisma";
const router = express.Router();

router.post("/newPost", async (req: Request, res: Response) => {
  const { title, description, postScope } = await req.body;
  // const { data } = req.body;
  // const { title, description } = data;
  const {
    architecture,
    industrialEngineering,
    systemsEngineering,
    civilEngineering,
  } = postScope;

  const response = await DataBaseInteraction.post.create({
    include: {
      postScope: true,
    },
    data: {
      title: title,
      description: description,
      image: [
        "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJpevBOQMgZ-Gaeb54y2Tin-o5vsoOtYW2nYtCpzkYqtj6ENWsHD4d1Bv-AUymOggA",
      ],
      postScope: {
        create: {
          systemsEngineering,
          civilEngineering,
          industrialEngineering,
          architecture,
        },
      },
    },
  });

  // const response = await DataBaseInteraction.user.create({
  //   data: {
  //     name: "New - 2",
  //   },
  // });

  return res.status(200).json({ sent: "OK", response, title });
});

router.get("/newPost", (req: Request, res: Response) => {
  return res.json({ message: "All OK - 1" });
});

export default router;
