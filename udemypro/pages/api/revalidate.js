
export default function handler(req, res) {
    const { slug } = req.query;
  
    // Revalidate the page with the given slug
  
    
  
    res.revalidate(slug);
  
  
    res.status(200).json({ message: 'Page revalidation triggered successfully.','path':slug });
  }