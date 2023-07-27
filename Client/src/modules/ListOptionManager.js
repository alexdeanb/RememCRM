import { getToken } from "./authManager";

const baseUrl = "/api/static";

export const getAllUserTypes = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/UserTypes`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get User Types."
        );
      }
    });
  });
};
export const getAllContractTypes = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/ContractTypes`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get Contract Types."
        );
      }
    });
  });
};
export const getAllRelationships = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/Relationships`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get Relationships."
        );
      }
    });
  });
};
export const getAllBurialTypes = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/BurialTypes`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get Burial Types."
        );
      }
    });
  });
};
export const getAllServiceTypes = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/ServiceTypes`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get Service Types."
        );
      }
    });
  });
};
export const getAllPriorities = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/Priorities`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get Priorities."
        );
      }
    });
  });
};
export const getAllStatuses = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/Statuses`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get Statuses."
        );
      }
    });
  });
};

export const getAllSources = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/Sources`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get Sources."
        );
      }
    });
  });
};
