import { getToken } from "./authManager";

const apiUrl = "/api/Contact";

export const getAllContacts = () => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get all contacts."
        );
      }
    });
  });
};

export const getAllUserContacts = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/user/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get all user contacts."
        );
      }
    });
  });
};

export const getContactById = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/contact/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get contact by Id."
        );
      }
    });
  });
};

export const addContact = (contact) => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new contact."
        );
      }
    });
  });
};

export const editContact = (contact) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/update/${contact.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to update a contact."
        );
      }
    });
  });
};
