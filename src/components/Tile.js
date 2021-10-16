import css from "./Tile.module.css";
import React, { useEffect, useReducer } from "react";
import reducer, {
  GET_SPORT_REQUEST,
  GET_SPORT_SUCCESS,
  INCREMENT_ID,
  DECREMENT_ID,
} from "../reducer.js";

export default function Switcher() {
  // counter piece
  const [state, dispatch] = useReducer(reducer, {
    selectedId: 2,
    isLoading: false,
    sports: {
      name: "SportName",
      id: 0,
    },
  });

  useEffect(() => {
    dispatch({ type: GET_SPORT_REQUEST });
    async function getSports() {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/sports/${state.selectedId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const json = await res.json();
      localStorage.setItem(state.selectedId, JSON.stringify(json));
      dispatch({ type: GET_SPORT_SUCCESS, payload: json });
      console.log(state);
    }
    let data = JSON.parse(localStorage.getItem(state.selectedId));
    data ? dispatch({ type: GET_SPORT_SUCCESS, payload: data }) : getSports();
  }, [state.selectedId]);

  console.log(state);
  return (
    <div className={css.container}>
      <p>
        {state.isLoading
          ? "Loading"
          : `${state.sports.id} ${state.sports.name} `}
      </p>
      <div>
        <img
          className={css.image}
          src={`${state.sports.image}`}
          alt={`${state.sports.name}`}
        />
      </div>
      <div>
        <button
          className={css.button}
          onClick={() => dispatch({ type: DECREMENT_ID })}
        >
          prev
        </button>
        <button
          className={css.button}
          style={{ marginLeft: "5%" }}
          onClick={() => dispatch({ type: INCREMENT_ID })}
        >
          next
        </button>
      </div>
    </div>
  );
}
