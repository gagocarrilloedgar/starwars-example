import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import {
  PeopleDetail,
  PlanetsDetails,
  StarWars,
  StarWarsDetail,
} from "./views/starwars";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserProvider } from "./store/userContext";
import { StarWarsList } from "./views/starwarsList";
import { NewPeopleDetail } from "./views/peopleDetail";
import { DetailPage } from "./views/detailPage";
import { StarshipsDetail } from "./views/starshipsDetail";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <UserProvider>
      <div>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/demo">
                <Demo />
              </Route>
              <Route exact path="/single/:theid">
                <Single />
              </Route>
              <Route exact path="/starwars">
                <StarWars />
              </Route>
              <Route exact path="/people/:id">
                <PeopleDetail />
              </Route>
              <Route exact path="/planets/:id">
                <PlanetsDetails />
              </Route>
              <Route exact path="/starwars-home">
                <StarWarsList />
              </Route>
              <Route exact path="/starwars-home/people/:id">
                <DetailPage path="people" />
              </Route>
              <Route exact path="/starwars-home/planets/:id">
                <DetailPage path="planets" />
              </Route>
              <Route exact path="/starwars-home/starships/:id">
                <StarshipsDetail path="starships" />
              </Route>
              <Route>
                <h1>Not found!</h1>
              </Route>
            </Switch>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
};

export default injectContext(Layout);
