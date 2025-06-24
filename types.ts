// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Blog post interface matching your Cosmic structure
export interface BlogPost extends CosmicObject {
  type_slug: 'blog-posts';
  metadata: {
    title?: string;
    subtitle?: string;
    excerpt?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    category?: Category;
    author?: Author;
    published_date?: string;
    featured?: boolean;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type_slug: 'categories';
  metadata: {
    name?: string;
    description?: string;
    color?: string;
    icon?: string;
  };
}

// Author interface
export interface Author extends CosmicObject {
  type_slug: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    profile_picture?: {
      url: string;
      imgix_url: string;
    };
    role?: string;
    website?: string;
    twitter?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards for runtime validation
export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type_slug === 'blog-posts';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type_slug === 'categories';
}

export function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type_slug === 'authors';
}

// Utility types
export type CreateBlogPostData = Omit<BlogPost, 'id' | 'created_at' | 'modified_at'>;
export type CreateCategoryData = Omit<Category, 'id' | 'created_at' | 'modified_at'>;
export type CreateAuthorData = Omit<Author, 'id' | 'created_at' | 'modified_at'>;