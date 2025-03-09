import MovieVideos from "../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import { JSX, Suspense } from "react";
import MovieCredit from "../../../components/movie/credit/movie-credit";

type IParams = Promise<{
  id: string;
}>;
export async function generateMetadata(props: { params: IParams }) {
  const param = await props.params;
  const id = param.id;
  // `id`를 사용하기 전에 비동기적으로 `params`를 가져옵니다.
  const movie = await getMovie(id); // `getMovie` 함수에서 비동기적으로 데이터를 가져오기
  return {
    title: `${movie.title}`,
  };
}
export default async function MovieDetail(props: { params: IParams }) {
  const param = await props.params;
  const id = param.id;
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
