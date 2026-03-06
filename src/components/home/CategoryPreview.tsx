import Link from "next/link";

interface CategoryPreviewProps {
  title: string;
  image: string;
  href: string;
}

export function CategoryPreview({ title, image, href }: CategoryPreviewProps) {
  return (
    <Link href={href} className="group">
      <div className="antique-card relative aspect-square rounded-lg overflow-hidden bg-stone-200">
        {/* Placeholder for image */}
        <div className="absolute inset-0 flex items-center justify-center text-stone-400 group-hover:text-stone-500 transition-colors">
          [{title}]
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-serif text-lg font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
