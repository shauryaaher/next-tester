import { NextRequest, NextResponse } from "next/server";

export default (req: NextRequest) => {
  if (req.method === "GET") {
    const response = {hello: "hello world"};
    return NextResponse.json(Object.values(response).toString());
  } else
    return NextResponse.json("HTTP 405: Only GET requests are allowed");
};

export const config: Object = {
  runtime: "experimental-edge",
};
