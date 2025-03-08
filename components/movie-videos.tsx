import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const response = await fetch(`${API_URL}/${id}/videos`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  // console.log("id", id);
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={video.name}
          allowFullScreen
        />
      ))}
    </div>
  );
}
