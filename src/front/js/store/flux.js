const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      pacientePosition: {
        latitude: undefined,
        longitude: undefined,
      },
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().logIn(0, "green");
      },

      // getPacientePosition: () => {
      //   navigator.geolocation.getCurrentPosition(
      //     function (position) {
      //       let lat = position.coords.latitude;
      //       let long = position.coords.longitude;
      //       setStore({
      //         userPosition: {
      //           latitude: lat,
      //           longitude: long,
      //         },
      //       });
      //     },
      //     function (error) {
      //       console.log("error", error);
      //     }
      //   );
      // },

      getMessage: async () => {
        try {
          // fetching data from the backend
          //					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
          //const data = await resp.json()
          // setStore({ message: data.message })
          // don't forget to return something, that is how the async resolves
          //return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      signUp: async ({ ...requestBody }, naturaleza) => {
        requestBody.name = requestBody.user;
        delete requestBody.user;
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/${naturaleza}`,
            {
              method: "POST",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 201) {
            const data = await response.json();
            localStorage.setItem("jwt-token", data.token);
          }
          return response.status === 201;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      logIn: async (requestBody) => {
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
            method: "POST",
            body: JSON.stringify({
              ...requestBody,
              email: requestBody.user,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (response.status !== 200) {
            throw "Invalid email or password format";
          }

          const data = await response.json();
          localStorage.setItem("jwt-token", data.token);

          return data;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      private: async () => {
        const token = localStorage.getItem("jwt-token");
        const response = await fetch(`${process.env.BACKEND_URL}/api/private`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok)
          throw Error("There was a problem in the login request");
        var data = await response.json();
        console.log("This is the data you requested", data);
        setStore({
          private: data,
        });
        return data;
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
