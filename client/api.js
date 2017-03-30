import fetch from "isomorphic-fetch"
import qs from "query-string"

const ApiBase = "api/v1"

export const createGame = () => {
  // TODO: come back and implement an initial player pick
  
  return fetch(`${ApiBase}/games`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    }
  })
  .then((res) => res.json());
}

export const selectColumn = (id, token_column) => {

  const query = qs.stringify({
    token_col: token_column
  })

  return fetch(`${ApiBase}/games/${id}?${query}`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    }
  })
  .then((res) => res.json());
}
