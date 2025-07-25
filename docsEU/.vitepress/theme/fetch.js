export function validateToken(urlParams, token) {
  return new Promise((resolve, reject) => {
    fetch(urlParams.API_Url + "/v2/quecauth/user/getInfo", {
      method: "get",
      headers: {
        Authorization:
          token && token.includes("AIot") ? token : `AIot ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let { code } = data;
        if (code !== 200) {
          reject(new Error("skip Error"));
        }
        resolve();
      });
  });
}
