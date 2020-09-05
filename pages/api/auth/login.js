export default (req, res) => {
  if (req.method !== "POST") {
    res.status(500).end();
    return;
  }
};
