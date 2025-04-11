export default async function handler(req, res) {
    const apiKey = process.env.nasa_apikey;
  
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await response.json();
  
    res.status(200).json(data);
  }
  