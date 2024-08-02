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
