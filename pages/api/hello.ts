import { NextRequest, NextResponse } from "next/server";

const func = (req: NextRequest) => {
  if (req.method === "GET") {
    const response = {hello: "hello world"};
    return NextResponse.json(Object.values(response).toString());
  } else
    return NextResponse.json("HTTP 405: Only GET requests are allowed");
};

export default func;

export const config: Object = {
  runtime: "experimental-edge",
};
