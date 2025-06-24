import { createAuthor, createCategory, createBlogPost } from './cosmic';

// Sample content data
const sampleAuthors = [
  {
    name: 'Alex Chen',
    bio: 'Tech enthusiast and content creator who loves sharing the latest in web development and CMS solutions.',
    profile_picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format,compress',
    role: 'Senior Developer',
    website: 'https://alexchen.dev',
    twitter: 'alexchen_dev'
  },
  {
    name: 'Sarah Johnson',
    bio: 'Digital marketing expert and blogger who helps businesses navigate the modern web landscape.',
    profile_picture: 'https://images.unsplash.com/photo-1494790108755-2616b612b5a5?w=400&h=400&fit=crop&auto=format,compress',
    role: 'Content Strategist',
    website: 'https://sarahjohnson.com',
    twitter: 'sarah_content'
  },
  {
    name: 'Mike Rodriguez',
    bio: 'Full-stack developer and CMS enthusiast who believes in the power of headless architecture.',
    profile_picture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format,compress',
    role: 'Full-Stack Developer',
    website: 'https://mikerodriguez.dev',
    twitter: 'mike_codes'
  }
];

const sampleCategories = [
  {
    name: 'Technology',
    description: 'Latest trends in web development and technology',
    color: '#3B82F6',
    icon: '💻'
  },
  {
    name: 'AI & Automation',
    description: 'Artificial intelligence and automation in modern development',
    color: '#8B5CF6',
    icon: '🤖'
  },
  {
    name: 'CMS & Content',
    description: 'Content management systems and headless CMS solutions',
    color: '#10B981',
    icon: '📝'
  },
  {
    name: 'Tutorials',
    description: 'Step-by-step guides and how-to articles',
    color: '#F59E0B',
    icon: '📚'
  },
  {
    name: 'Industry News',
    description: 'Latest news and updates from the tech industry',
    color: '#EF4444',
    icon: '📰'
  }
];

const sampleBlogPosts = [
  {
    title: 'Welcome to 2025: The Year Blogging Got Ridiculously Easy',
    subtitle: 'How Cosmic AI is making content creators everywhere do happy dances',
    excerpt: 'Remember when setting up a blog required a computer science degree and three cups of coffee? Those days are officially over. Welcome to the future of blogging where AI does the heavy lifting.',
    content: `# Welcome to 2025: The Year Blogging Got Ridiculously Easy

Happy New Year, fellow content creators! 🎉

If you're reading this, congratulations – you've stumbled upon what might be the most honest blog post about blogging you'll read this year. I'm not here to sell you another course or convince you that blogging is dead (spoiler alert: it's very much alive and kicking).

## The Old Days Were... Well, Old

Cast your mind back to 2023. Setting up a blog meant:
- Wrestling with hosting providers who spoke in mysterious acronyms
- Battling themes that looked nothing like the demo
- Spending hours on plugins that promised the world but delivered chaos
- Crying into your keyboard at 2 AM because your "simple" blog broke... again

## Enter 2025: The AI Revolution

This year changed everything. While everyone was busy arguing about whether AI would replace human creativity, the smart folks at Cosmic were quietly building something revolutionary: **AI-powered content management that actually works**.

Here's what blew my mind: I literally described my dream blog to an AI, and it built the entire thing. Not just the content structure – the *whole application*. Frontend, backend, database relationships, responsive design, SEO optimization – everything.

## What Makes This Different?

Unlike traditional CMS platforms that shall remain nameless (looking at you, platforms that rhyme with "WordMess"), Cosmic AI understands context. It doesn't just give you a generic template – it builds something tailored to your specific needs.

Want a tech blog? It knows you need code syntax highlighting and technical categories.
Building a food blog? It sets up recipe schemas and ingredient lists.
Starting a travel blog? Geographic tagging and photo galleries are built in.

## The Results Speak for Themselves

This blog you're reading? Built in under 10 minutes. And I'm not talking about a basic "Hello World" setup – I mean a fully functional, beautifully designed, SEO-optimized blog with:

- ✅ Responsive design that looks great on all devices
- ✅ Lightning-fast loading speeds
- ✅ Built-in SEO optimization
- ✅ Author profiles and category management
- ✅ Image optimization with automatic compression
- ✅ Modern, accessible design
- ✅ Full markdown support for rich content

## What This Means for Content Creators

The barrier to entry just disappeared. Whether you're a seasoned developer or someone who thinks CSS is a government agency, you can now build professional-grade blogs without breaking a sweat (or your budget).

## Looking Ahead

This is just the beginning. If AI can build a complete blog application from a conversation, imagine what's possible for the rest of 2025. We're not just witnessing the future of web development – we're living it.

Stay tuned for more posts this year where I'll dive deeper into specific features, share tips for getting the most out of modern CMS solutions, and maybe throw in a few more friendly jabs at outdated platforms.

Welcome to the future of blogging. It's pretty awesome here.

---

*Built with ❤️ using Cosmic AI in 2025*`,
    featured_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format,compress',
    published_date: '2025-01-01T00:00:00.000Z',
    featured: true,
    author_slug: 'alex-chen',
    category_slug: 'technology'
  },
  // ... (rest of the blog posts from sample-data.ts)
];

export async function createSampleContent() {
  try {
    console.log('🚀 Starting sample content creation...');
    
    // Create authors
    console.log('👤 Creating authors...');
    const authors = [];
    for (const authorData of sampleAuthors) {
      const author = await createAuthor(authorData);
      authors.push(author);
      console.log(`✅ Created author: ${author.title}`);
    }
    
    // Create categories  
    console.log('🏷️ Creating categories...');
    const categories = [];
    for (const categoryData of sampleCategories) {
      const category = await createCategory(categoryData);
      categories.push(category);
      console.log(`✅ Created category: ${category.title}`);
    }
    
    // Create blog posts
    console.log('📝 Creating blog posts...');
    for (const postData of sampleBlogPosts) {
      // Find matching author and category
      const author = authors.find(a => 
        a.title?.toLowerCase().replace(/\s+/g, '-') === postData.author_slug.replace('alex-chen', 'alex-chen').replace('sarah-johnson', 'sarah-johnson').replace('mike-rodriguez', 'mike-rodriguez')
      ) || authors[0]; // fallback to first author
      
      const category = categories.find(c => 
        c.title?.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/\s+/g, '-') === postData.category_slug.replace('ai-automation', 'ai-automation').replace('cms-content', 'cms-content').replace('technology', 'technology').replace('tutorials', 'tutorials').replace('industry-news', 'industry-news')
      ) || categories[0]; // fallback to first category
      
      const blogPost = await createBlogPost({
        ...postData,
        author: author?.id,
        category: category?.id
      });
      
      console.log(`✅ Created blog post: ${blogPost.title}`);
    }
    
    console.log('🎉 Sample content creation completed!');
    return { success: true, message: 'Sample content created successfully!' };
  } catch (error) {
    console.error('❌ Error creating sample content:', error);
    return { success: false, error: error.message };
  }
}