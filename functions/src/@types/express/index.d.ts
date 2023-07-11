declare namespace Express {
  interface Request {
    user: {
      admin_id?: string;
      user_id?: string;
      name: string;
    };
    rawBody: Buffer | string;
    stripeEvent: import('stripe').Stripe.Event;
  }
}

interface StripLineItem {
  price: string;
  quantity: number;
}
