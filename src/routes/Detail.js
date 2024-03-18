import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [load, setLoad] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setInfo(json);
    setLoad(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {load ? (
        <h1>"Loading..."</h1>
      ) : (
        <h1>Title: {JSON.stringify(info.data.movie.title)}</h1>
      )}
    </div>
  );
}

export default Detail;
