import { type NextFunction, type Request, type Response } from "express";
import createError from "http-errors";

const defaultController = {
  async poc(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const resourceUrl = "https://raw.githubusercontent.com/TanmoySG/placeholders/main/documentation/images/Logo.png";
      const fetchedResource = await fetch(resourceUrl);
      const contentType = fetchedResource.headers.get("content-type") as string;
      const resourceBuffer = await fetchedResource.arrayBuffer();
      const reourceData = Buffer.from(resourceBuffer);
      // Setting the content type of the resource
      res.set("Content-Type", contentType);
      // Sending back the resource
      res.send(reourceData);
    } catch (err) {
      console.log(err);
      next(createError.InternalServerError());
    }
  },
};

export default defaultController;
