import axios from 'axios';

export const onGetBlogPosts = async () => {
  try {
    const postsUrl = process.env.CLOUDWAYS_POSTS_URL;
    const postsResponse = await axios.get(postsUrl);
    const posts = postsResponse.data;

    const featuredImagesUrl = process.env.CLOUDWAYS_FEATURED_IMAGES_URL;
    const imagesResponse = await axios.get(featuredImagesUrl);
    const images = imagesResponse.data;

    // Créer un map pour accéder rapidement aux détails de l'image par son ID
    const imageMap = new Map();
    images.forEach(img => {
      if (img.media_details && img.media_details.file) {
        console.log('====================================');
        console.log(`Image ID: ${img.id} - File: ${img.media_details.file}`);
        console.log('====================================');
        imageMap.set(img.post, img.media_details.file); // Associer l'ID du post parent à l'image
      } else {
        console.log('Missing media details or file for image ID:', img.id);
      }
    });

    const postArray = posts.map(post => {
      // Vérifier si une image est associée au post via son ID
      const imageUrl = imageMap.get(post.id) || null;

      console.log(`Post ID: ${post.id} - Image URL: ${imageUrl}`);

      return {
        id: post.id,
        title: post.title.rendered,
        image: imageUrl, // URL de l'image ou null
        content: post.content.rendered,
        createdAt: new Date(post.date)
      };
    });

    return postArray;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};



export const onGetBlogPost = async (id: string) => {
    try {
      const postUrl = process.env.CLOUDWAYS_POSTS_URL
      if (!postUrl) return
      const post = await axios.get(`${postUrl}/${id}`)
      if (post.data) {
        const authorUrl = process.env.CLOUDWAYS_USERS_URL
        if (!authorUrl) return
        const author = await axios.get(`${authorUrl}${post.data.author}`)
        if (author.data) {
          return {
            id: post.data.id,
            title: post.data.title.rendered,
            content: post.data.content.rendered,
            createdAt: new Date(post.data.date),
            author: author.data.name,
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }