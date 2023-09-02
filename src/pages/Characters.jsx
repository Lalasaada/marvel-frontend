import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?name=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="recherche de personnage"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </form>
      <div className="character-container">
        {data.results.map((character) => {
          return (
            <Link key={character._id} to={`/character/${character._id}`}>
              <div className="character">
                <article>
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt="character pic"
                  />
                  <h2>{character.name}</h2>
                  <p>{character.description}</p>
                </article>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
