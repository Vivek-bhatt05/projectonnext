
// export default function handler(req, res) {
//     const { slug } = req.query;
//     console.log(slug);
  
//     // Revalidate the page with the given slug
  
    
  
//     res.revalidate(slug);
  
  
//     res.status(200).json({ message: 'Page revalidation triggered successfully.','path':slug });
//   }

export default async function handler(req, res) {


  if (req.query.secret !== "hello") {
    return res.status(401).json({ message: 'Invalid token' })
  }
  try {
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(req.query.path);
    return res.json({ revalidated: true })
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error revalidating')
  }
}