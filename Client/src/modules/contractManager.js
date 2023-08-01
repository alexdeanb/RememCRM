import { json } from "react-router-dom";
import { getToken } from "./authManager";

const apiUrl = "/api/Contract";

export const getContractsByUserId = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/User/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.statusText === "Not Found") {
        return "";
      } else {
        throw new Error(
          "An unknown error occured when trying to retrieve contracts by the User Id"
        );
      }
    });
  });
};

export const getContractByContractId = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/Contract/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.statusText === "Not Found") {
        return "";
      } else {
        throw new Error(
          "An unknown error occured when trying to retrieve the contract by that contract Id"
        );
      }
    });
  });
};

export const getContractsByContactId = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/contact/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.statusText === "Not Found") {
        return "";
      } else {
        throw new Error(
          "An unknown error occured when trying to retrieve the contract by that contact Id"
        );
      }
    });
  });
};

export const addContract = (contract) => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contract),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occured when trying to add a new contract."
        );
      }
    });
  });
};

export const editContract = (contract) => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contract),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occured when trying to update a contract."
        );
      }
    });
  });
};

export const deleteContract = (id) => {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};
