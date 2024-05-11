export default function handler(req, res) {
  res.setPreviewData({ user: "Vishmas" });
  //   res.end("Preview mode enabled");
  res.redirect(req.query.redirect);
}
