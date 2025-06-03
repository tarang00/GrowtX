
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, Share2, Bookmark, ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  icon: React.ReactNode;
  content?: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
    tags: string[];
  };
}

interface BlogDetailProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

const BlogDetail = ({ isOpen, onClose, post }: BlogDetailProps) => {
  const { toast } = useToast();

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Blog post link has been copied to clipboard.",
    });
  };

  const handleBookmark = () => {
    toast({
      title: "Bookmarked!",
      description: "Blog post has been added to your bookmarks.",
    });
  };

  const handleLike = () => {
    toast({
      title: "Liked!",
      description: "Thank you for your feedback!",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="w-fit">
              {post.category}
            </Badge>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 size={16} />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleBookmark}>
                <Bookmark size={16} />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLike}>
                <ThumbsUp size={16} />
              </Button>
            </div>
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight">
            {post.title}
          </DialogTitle>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground mt-4">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-8">
          {/* Featured Image */}
          <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-lg mb-8">
            <div className="text-primary">{post.icon}</div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {post.content?.introduction || post.excerpt}
            </p>
          </div>

          <Separator className="my-8" />

          {/* Content Sections */}
          {post.content?.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <div className="prose max-w-none">
                <p className="leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </div>
              {index < post.content.sections.length - 1 && (
                <Separator className="mt-8" />
              )}
            </div>
          ))}

          {/* Conclusion */}
          {post.content?.conclusion && (
            <div className="mt-8">
              <Separator className="mb-8" />
              <h2 className="text-xl font-semibold mb-4">Conclusion</h2>
              <div className="prose max-w-none">
                <p className="leading-relaxed text-muted-foreground">
                  {post.content.conclusion}
                </p>
              </div>
            </div>
          )}

          {/* Tags */}
          {post.content?.tags && (
            <div className="mt-8">
              <Separator className="mb-6" />
              <h3 className="text-lg font-medium mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.content.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-card/50 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">
              Found this article helpful?
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for more insights and business growth tips.
            </p>
            <Button>Subscribe Now</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogDetail;
