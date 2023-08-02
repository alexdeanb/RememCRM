import { getToken } from "./authManager";

const baseUrl = "/api/ToDo";

export const getAllUserToDos = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/User/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get user ToDos."
        );
      }
    });
  });
};

export const getAllToDoById = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/Item/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get that ToDo."
        );
      }
    });
  });
};

export const getCompletedToDoByContactId = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/Contact/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get Completed ToDos for the Contact."
        );
      }
    });
  });
};

export const addToDo = (toDo) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toDo),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new ToDo."
        );
      }
    });
  });
};

export const editToDo = (toDo) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toDo),
    }).then((resp) => {
      if (resp.ok) {
        return;
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to update a ToDo."
        );
      }
    });
  });
};

export const deleteToDo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};
