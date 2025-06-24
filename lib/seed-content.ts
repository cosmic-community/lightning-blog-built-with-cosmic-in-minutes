import { 
  createAuthor, 
  createCategory, 
  createBlogPost,
  getAllAuthors,
  getAllCategories 
} from './cosmic';
import { sampleAuthors, sampleCategories, sampleBlogPosts } from './sample-data';

export async function seedContent() {
  try {
    console.log('Starting content seeding...');
    
    // Check if content already exists
    const existingAuthors = await getAllAuthors();
    const existingCategories = await getAllCategories();
    
    if (existingAuthors.length > 0 || existingCategories.length > 0) {
      console.log('Content already exists, skipping seed...');
      return;
    }
    
    // Create authors
    console.log('Creating authors...');
    const authors = [];
    for (const authorData of sampleAuthors) {
      const author = await createAuthor(authorData);
      authors.push(author);
      console.log(`Created author: ${author.title}`);
    }
    
    // Create categories  
    console.log('Creating categories...');
    const categories = [];
    for (const categoryData of sampleCategories) {
      const category = await createCategory(categoryData);
      categories.push(category);
      console.log(`Created category: ${category.title}`);
    }
    
    // Create blog posts
    console.log('Creating blog posts...');
    for (const postData of sampleBlogPosts) {
      // Find matching author and category
      const author = authors.find(a => 
        a.metadata?.name?.toLowerCase().replace(' ', '-') + '-' + 
        a.metadata?.name?.toLowerCase().split(' ')[1] === postData.author_slug
      );
      const category = categories.find(c => 
        c.title?.toLowerCase().replace(' ', '-') === postData.category_slug
      );
      
      const blogPost = await createBlogPost({
        ...postData,
        author: author?.id,
        category: category?.id
      });
      
      console.log(`Created blog post: ${blogPost.title}`);
    }
    
    console.log('Content seeding completed!');
  } catch (error) {
    console.error('Error seeding content:', error);
  }
}