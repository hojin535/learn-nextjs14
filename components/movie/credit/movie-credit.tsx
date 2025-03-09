async function getCredit(id: string) {
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const url = `${API_URL}/${id}/credits`;
  const response = await fetch(url, {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export default async function MovieCredit({ id }: { id: string }) {
  const credits = await getCredit(id);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {credits.map((castMember) => (
        <div key={castMember.id} style={{ margin: "10px" }}>
          <img
            src={castMember.profile_path}
            alt={castMember.name}
            style={{ width: "185px", height: "278px" }}
          />
          <h1>{castMember.name}</h1>
          <h2>{castMember.character}</h2>
        </div>
      ))}
    </div>
  );
}
