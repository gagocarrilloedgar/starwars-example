const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
      user: {
        name: "Jhon",
        lastName: "Doe",
        email: "jhondoe@fake.com",
      },
      planets: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
      fetchPlanetsData: () => {
        // implement the planets data
      },
      popUpAlert: () => {
        alert("This is an alert");
      },
      changeUserName: (newName) => {
        const store = getStore();

        const newUser = { ...store.user, name: newName };

        const newUstore = { demo: store.demo, user: newUser };

        setStore(newUstore);
      },
    },
  };
};

export default getState;
