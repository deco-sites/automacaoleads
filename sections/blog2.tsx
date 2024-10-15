Here's the code for a section that displays the 3 latest blog posts and allows the user to select or create a new blog post:

import { ImageWidget } from 'apps/admin/widgets.ts';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: ImageWidget;
  date: string;
}

interface Props {
  /**
   * @description The title of the blog section
   * @format rich-text
   */
  sectionTitle?: string;
  /**
   * @description The 3 latest blog posts to display
   */
  latestPosts: BlogPost[];
  /**
   * @description The action to perform when creating a new post
   */
  onCreatePost?: () => void;
  /**
   * @description The action to perform when selecting a post
   */
  onSelectPost?: (postId: string) => void;
}

export default function BlogSection({
  sectionTitle = "Latest Blog Posts",
  latestPosts = [
    {
      id: "1",
      title: "First Blog Post",
      excerpt: "This is a short excerpt of the first blog post.",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      date: "2023-05-01"
    },
    {
      id: "2",
      title: "Second Blog Post",
      excerpt: "This is a short excerpt of the second blog post.",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      date: "2023-05-15"
    },
    {
      id: "3",
      title: "Third Blog Post",
      excerpt: "This is a short excerpt of the third blog post.",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      date: "2023-05-30"
    }
  ],
  onCreatePost = () => {},
  onSelectPost = () => {}
}: Props) {
  return (
    <section class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold mb-6 text-center">{sectionTitle}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {latestPosts.map((post) => (
          <div key={post.id} class="card bg-base-100 shadow-xl">
            <figure>
              <img src={post.image} alt={post.title} class="w-full h-48 object-cover" />
            </figure>
            <div class="card-body">
              <h3 class="card-title">{post.title}</h3>
              <p class="text-sm text-gray-500">{post.date}</p>
              <p>{post.excerpt}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary" onClick={() => onSelectPost(post.id)}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="text-center">
        <button class="btn btn-secondary" onClick={onCreatePost}>
          Create New Post
        </button>
      </div>
    </section>
  );
}