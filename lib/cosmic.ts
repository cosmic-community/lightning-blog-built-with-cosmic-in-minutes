import { createBucketClient } from '@cosmicjs/sdk';
import { BlogPost, Category, Author } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

// Blog post functions
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('-metadata.published_date');
    
    return response.objects as BlogPost[];
  } catch (error) {
    if ((error as any)?.status === 404) {
      return [];
    }
    throw error;
  }
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'blog-posts',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('-metadata.published_date');
    
    return response.objects as BlogPost[];
  } catch (error) {
    if ((error as any)?.status === 404) {
      return [];
    }
    throw error;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'blog-posts',
        slug
      })
      .depth(1);
    
    return response.object as BlogPost;
  } catch (error) {
    if ((error as any)?.status === 404) {
      return null;
    }
    throw error;
  }
}

export async function getPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'blog-posts',
        'metadata.category': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('-metadata.published_date');
    
    return response.objects as BlogPost[];
  } catch (error) {
    if ((error as any)?.status === 404) {
      return [];
    }
    throw error;
  }
}

// Category functions
export async function getAllCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Category[];
  } catch (error) {
    if ((error as any)?.status === 404) {
      return [];
    }
    throw error;
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'categories',
        slug
      });
    
    return response.object as Category;
  } catch (error) {
    if ((error as any)?.status === 404) {
      return null;
    }
    throw error;
  }
}

// Author functions
export async function getAllAuthors(): Promise<Author[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'authors' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Author[];
  } catch (error) {
    if ((error as any)?.status === 404) {
      return [];
    }
    throw error;
  }
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'authors',
        slug
      });
    
    return response.object as Author;
  } catch (error) {
    if ((error as any)?.status === 404) {
      return null;
    }
    throw error;
  }
}

// Create content functions
export async function createBlogPost(postData: any) {
  try {
    const response = await cosmic.objects.insertOne({
      type: 'blog-posts',
      title: postData.title,
      metadata: {
        title: postData.title,
        subtitle: postData.subtitle || '',
        excerpt: postData.excerpt || '',
        content: postData.content,
        featured_image: postData.featured_image,
        category: postData.category,
        author: postData.author,
        published_date: postData.published_date,
        featured: postData.featured || false
      }
    });
    
    return response.object as BlogPost;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
}

export async function createCategory(categoryData: any) {
  try {
    const response = await cosmic.objects.insertOne({
      type: 'categories',
      title: categoryData.name,
      metadata: {
        name: categoryData.name,
        description: categoryData.description || '',
        color: categoryData.color || '#3B82F6',
        icon: categoryData.icon || '📝'
      }
    });
    
    return response.object as Category;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
}

export async function createAuthor(authorData: any) {
  try {
    const response = await cosmic.objects.insertOne({
      type: 'authors',
      title: authorData.name,
      metadata: {
        name: authorData.name,
        bio: authorData.bio || '',
        profile_picture: authorData.profile_picture,
        role: authorData.role || '',
        website: authorData.website || '',
        twitter: authorData.twitter || ''
      }
    });
    
    return response.object as Author;
  } catch (error) {
    console.error('Error creating author:', error);
    throw error;
  }
}