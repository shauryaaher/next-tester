// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const path =
  "https://firestore.googleapis.com/v1/projects/next-js-tester/databases/(default)/documents/oo/ll";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).send("Doesn't work.");
  } else {
    const data = await fetch(path)
      .then((res) => res.json())
      .catch((error) => console.error(error));
    return res.status(200).send(Object.values(data.fields.f).toString());
  }
}
