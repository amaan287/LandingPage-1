import Image from "next/image";
import Link from "next/link";

interface TourCardProps {
  number: string;
  image: string;
  title: string;
  description: string;
  className?: string;
}

export default function TourCard({
  number,
  image,
  title,
  description,
  className,
}: TourCardProps) {
  return (
    <Link
      href={`/tour/${number}`}
      className={`group relative overflow-hidden rounded-lg aspect-[3/4] ${className}`}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>

      <div className="absolute top-0 right-0 p-4 opacity-60 text-sm">
        <span></span>
      </div>
    </Link>
  );
}
