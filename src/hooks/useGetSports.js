import { useState, useEffect, useReducer } from "react";
import reducer, { GET_SPORT_REQUEST, GET_SPORT_SUCCESS } from "./../reducer";

function useGetSports(API_URL, id = null) {
  const [state, dispatch] = useReducer(reducer, { test: true, selectedId: 7 });
  const [sport, setSport] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch({ type: GET_SPORT_REQUEST });
    fetch(API_URL, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setSport(data))
      .catch((err) => setError(err));

    setTimeout(() => dispatch(GET_SPORT_SUCCESS, sport), 2000);
  }, [id]);

  return [state, sport, error, setSport];
}

export default useGetSports;

/*
  useEffect(() => {
    const getConcerts = async (url) => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setConcerts(json.payload.splice(0, 6));
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getConcerts(`https://vibezz-chaser.herokuapp.com/concerts`);
  }, []);
*/
