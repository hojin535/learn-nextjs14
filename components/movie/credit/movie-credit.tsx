async function getCredit(id: string) {
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const response = await fetch(`${API_URL}/movies/${id}/credits`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function MovieCredit({ id }: { id: string }) {
  console.log("id", id);
  const credits: { [key: string]: any }[] = await getCredit(id);
  console.log(credits);
  return (
    <div>
      {credits.map((credit, index) => (
        <ul key={index}>
          {Object.keys(credit).map((key) => (
            <li key={key}>{`${key}: ${credit[key]}`}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}
