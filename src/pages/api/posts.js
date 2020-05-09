import nextConnect from "next-connect"
import { ObjectId } from "mongodb"
import middleware from "../../utils/database"

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
	// Find all documents in the blog posts collection
	await req.db.collection("posts").find({}, (err, cursor) => {
		if (!err && cursor) {
			// Convert cursor to a documents array if found and no errors occur
			cursor.toArray((err, posts) => {
				if (!err && posts) {
					// Store blog posts as JSON in result body if cursor-to-array conversion is successful and no errors occur
					res.json(JSON.stringify(posts))
				} else {
					console.log("== Error: either no blog posts were found or an error occurred while converting the cursor to an array")
					res.status(500).json({ err })
				}
			})
		} else {
			console.log("== Error: either no cursor found or an error occurred while performing the query")
			res.status(500).json({ err })
		}
	})
})

handler.post(async (req, res) => {
	const { post } = req.body

	// Remove _id attribute to prevent attempts to update it in DB
	if (post["_id"]) {
		delete post["_id"]
	}

	try {
		let doc = await req.db.collection("posts").insertOne(post)
		res.status(201).json({
			message: "OK",
			insertedId: doc.insertedId
		})
	} catch (err) {
		// Return error with 500 status code if insertion fails
		res.status(500).json({ err })
	}
})

export default handler
