const { ImageVariation } = require('openai')
const generateImg = require('./controller')

const generateVariation = async (req, res) => {
   
    const { ImageVariation } = require('@openai/dalle-2');

    const imageVariation = new ImageVariation();
    const image = 'path/to/your/image.jpg';
    const variations = imageVariation.generate(image);


}

module.exports = { generateVariation }