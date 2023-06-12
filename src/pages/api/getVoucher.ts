import axios from "axios";

export default async function getVoucher(req: any, res: any) {
  const jsonBinUrl = `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_ID}`;
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  if (email.includes(" ")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  if (!email.includes(".")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  console.log(process.env.JSONBIN_SECRET_KEY);

  try {
    const response = await axios.put(
      jsonBinUrl,
      { email: email },
      {
        headers: {
          "X-Master-Key": process.env.JSONBIN_SECRET_KEY?.replace(/\\\$/g, "$"),
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data)
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
