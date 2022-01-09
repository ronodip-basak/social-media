// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import auth from "../../middleware/auth"

export default auth(async function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
})
