export const signUp = async (body) => {
  console.log(body);
  try {
    const res = await fetch(
      new Request("http://localhost:8080/api/v1/users/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      })
    );
    // if (res.ok) {
    //   const data = await res.json();
    //   console.log(data);
    // }
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async () => {
  try {
    const res = await fetch(
      new Request("http://localhost:8080/api/v1/users/", {
        method: "GET",
        credentials: "include",
      })
    );
    if (res.ok) {
      const data = await res.json();

      return data.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getMessagesApi = async (userId: string) => {
  try {
    const res = await fetch(
      new Request(`http://localhost:8080/api/v1/messages/${userId}`, {
        method: "GET",
        credentials: "include",
      })
    );
    if (res.ok) {
      const data = await res.json();

      return data.data;
    }
  } catch (e) {
    console.log(e);
  }
};
