import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/Heading";
import PaginationBar from "@/components/PaginationBar";
import { getReviews } from "@/lib/reviews";
import SearchBox from "@/components/SearchBox";
import Image from "next/image";

interface ReviewsPageProps {
  searchParams: { page?: string };
}

export const metadata: Metadata = {
  title: "Reviews",
};

const PAGE_SIZE = 6;

export default async function ReviewsPage({ searchParams }: ReviewsPageProps) {
  const page = parsePageParam(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between pb-3">
        <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
        <SearchBox />
      </div>
      <ul className="flex flex-col gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border rounded w-80 hover:shaow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                priority={index === 0}
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-orbitron font-semibold">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function parsePageParam(paramValue: string): number {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
