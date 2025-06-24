<!-- README_START -->
# ⚡ Lightning Blog - Built with Cosmic in Minutes

A modern, blazing-fast blog that proves building with Cosmic is lightning quick! This isn't just another blog - it's a demonstration of how Cosmic's AI Builder can create a full-featured blog application in under 5 minutes. Say goodbye to WordPress headaches and hello to the future of content management!

## ✨ Features

- 🚀 **Lightning Fast** - Built with Next.js 15 and optimized for speed
- 🎨 **Modern Design** - Clean, responsive interface with Tailwind CSS
- 📱 **Mobile First** - Looks perfect on all devices
- 🏷️ **Smart Categories** - Organize content with colorful category badges
- 👤 **Author Profiles** - Rich author information with social links
- 🖼️ **Featured Images** - Stunning image optimization with imgix
- 📝 **Markdown Support** - Rich content editing with full markdown support
- ⚡ **Real-time Preview** - See changes instantly
- 🎯 **SEO Optimized** - Built-in meta tags and social sharing
- 🌟 **Featured Posts** - Highlight your best content

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=my-ai-project-production)

## Original Prompt

This application was built based on the following request:

> I want to create a blog that is specifically designed to showcase how easy it is to build a blog with Cosmic. It should be modern, fast, easy to edit, and designed with the sole purpose of demonstrating how Cosmic AI can build you your blog with just a few prompts and you're off to the races! I want the blog to launch looking like it's been around since January of 2025 with 2 blogs written each month so create 2 blogs and date them for each of the months from January to June. Have the most recent blog be all about how I built the blog in under 5 minutes using Cosmic's AI Builder. Have all of the blog posts sound human, be humorous, and point out how WordPress blogs are in the past and Cosmic blogs are the future.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Built With

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic** - Headless CMS for content management
- **React Markdown** - Markdown rendering
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A [Cosmic](https://www.cosmicjs.com) account

### Installation

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd lightning-blog
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Cosmic SDK Examples

### Fetching Blog Posts
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all published posts
const posts = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get featured posts only
const featuredPosts = await cosmic.objects
  .find({ 
    type: 'blog-posts',
    'metadata.featured': true 
  })
  .depth(1)
```

### Creating New Content
```typescript
// Create a new blog post
const newPost = await cosmic.objects.insertOne({
  type: 'blog-posts',
  title: 'My Amazing Post',
  metadata: {
    content: '# Hello World\n\nThis is my first post!',
    excerpt: 'A brief summary of the post',
    featured: true,
    published_date: new Date().toISOString()
  }
})
```

## 🎨 Cosmic CMS Integration

This blog leverages three main content types in Cosmic:

### Blog Posts
- **Title & Subtitle** - Main headlines
- **Content** - Full markdown content with rich formatting
- **Featured Image** - Hero images with automatic optimization
- **Category & Author** - Connected object relationships
- **Published Date** - Scheduling and organization
- **Featured Toggle** - Highlight important posts

### Categories
- **Name & Description** - Category information
- **Color** - Custom theming for each category
- **Icon** - Emoji icons for visual appeal

### Authors
- **Profile Information** - Name, bio, role
- **Profile Picture** - Professional headshots
- **Social Links** - Website and Twitter integration

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Add environment variables in your Vercel dashboard**
3. **Deploy automatically with every push**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. **Connect your repository to Netlify**
2. **Set build command**: `bun run build`
3. **Set publish directory**: `.next`
4. **Add environment variables in Netlify dashboard**

### Environment Variables for Production

Set these in your hosting platform:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 📚 Learn More

- [Cosmic Documentation](https://www.cosmicjs.com/docs) - Learn about Cosmic features and API
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com) - Learn about utility-first CSS

---

**Ready to build your own lightning-fast blog?** [Get started with Cosmic](https://www.cosmicjs.com) and see how easy content management can be! 🚀
<!-- README_END -->