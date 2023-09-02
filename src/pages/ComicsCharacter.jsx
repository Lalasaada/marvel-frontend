import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ComicsCharacter = () => {
  const { characterId } = useParams();
  const [comics, setComics] = useState([]); //pour lister les films au fur et à mesure des boucles
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (characterId) {
        // Vérifiez que characterId est défini
        try {
          const response = await axios.get(
            `http://localhost:3000/comics/${characterId}`
          );
          console.log(response.data);
          setComics(response.data.comics);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
          console.log(error.response);
        }
      }
    };
    fetchData();
  }, [characterId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <h1 className="title">Liste des films par personnage</h1>
          <div className="container-comics-character">
            {comics.map((comic) => (
              <div className="comics-character">
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt=""
                />
                <p key={comic.id}>{comic.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default ComicsCharacter;
