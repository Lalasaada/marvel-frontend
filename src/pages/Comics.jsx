import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="character-container">
      {data.results.map((comic) => {
        return (
          <div className="character">
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt=""
            />
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
