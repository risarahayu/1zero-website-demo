import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export function SeeAllCard({ isCenter }: { isCenter: boolean }) {
  return (
    <Link
      to={`${import.meta.env.BASE_URL}about#activity`}
      className={`
        group flex h-[400px] items-center justify-center rounded-3xl border
        transition-all duration-500
        ${isCenter
          ? "border-brunswick-green-500 bg-brunswick-green-900/10"
          : "border-sea-salt/20 opacity-60"
        }
      `}
    >
      <div className="text-center space-y-4">
        <p className="text-2xl font-bold text-brunswick-green-500">
          Explore Our Journey
        </p>

        <ArrowRight className="mx-auto h-8 w-8 text-brunswick-green-500 transition-transform group-hover:translate-x-2" />
      </div>
    </Link>
  );
}