import MovieVideos from "../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import { Suspense } from "react";
import MovieCredit from "../../../components/movie/credit/movie-credit";

interface IParams {
  params: { id: string };
}
export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  // `id`를 사용하기 전에 비동기적으로 `params`를 가져옵니다.
  const movie = await getMovie(id); // `getMovie` 함수에서 비동기적으로 데이터를 가져오기
  return {
    title: `${movie.title}`,
  };
}
export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const credits = await getMovie(id);
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie credit</h1>}>
        <MovieCredit id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
