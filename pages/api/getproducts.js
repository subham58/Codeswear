// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Product from "@components/models/Product"
import connectDb from "@components/middleware/mongoose"

const handler = async (req, res) => {
    let products = await Product.find().maxTimeMS(30000);
    res.status(200).json({ products })
}

export default connectDb(handler);
