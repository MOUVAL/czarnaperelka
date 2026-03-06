interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
        {title}
      </h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
}
