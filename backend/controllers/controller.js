const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const generateImg = async (req, res) => {
    const { description, imgSize } = req.body;

    const size = imgSize === 'small' ? '256x256' : imgSize == 'medium' ? '512x512' : '1024x1024';

    try {
        const response = await openai.createImage({
            prompt: description,
            n: 1,
            size: size
        });
        const url = response.data.data[0].url
        res.status(200).json({
            data: url
        })
    } catch (err) {
        res.status(400).json({
            error: 'No imgae could be gen...'
        })

    }
}
module.exports = { generateImg }