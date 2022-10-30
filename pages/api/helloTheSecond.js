import { NextResponse } from "next/server";

const path =
  "https://firestore.googleapis.com/v1/projects/next-js-tester/databases/(default)/documents/oo/ll";

export default async function helloTheSecond(req, res) {
  const data = await fetch(path)
    .then((res) => res.json())
    .catch((error) => console.error(error));
  return NextResponse.json(Object.values(data.fields.f).toString());
}

export const config = {
  runtime: "experimental-edge",
};
