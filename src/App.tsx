import { Page404 } from "pages/Error";
import AddPost from "pages/PostFeatured/AddPost";
import PostDetails from "pages/PostFeatured/PostDetails";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/post/add" component={AddPost} />
        <Route exact path="/post/:id" component={PostDetails} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
