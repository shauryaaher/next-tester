export default (req, res) => {
  req.method === "GET"
    ? res.status(200).send("Hello world!")
    : res.status(405).send("Only GET requests work.");
};
