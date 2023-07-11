import bodyParser from 'body-parser';
import { Request } from 'express';

const options: bodyParser.OptionsJson = {
  verify: (req: Request, res, buf) => {
    if (req.originalUrl.startsWith('/stripe-webhooks')) req.rawBody = buf.toString();
  },
};

export default bodyParser.json(options);
