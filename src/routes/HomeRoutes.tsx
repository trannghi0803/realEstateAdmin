import React from "react";
import { Route, Switch } from "react-router-dom";
import { Screens } from "../constants";
import { HomeView } from "../app/views/home";
import { ProjectView } from "../app/views/project";
import { ApartmentView } from "../app/views/apartment";
import ListingProjectView from "../app/views/listing/ListingProjectView";
import { NewsView, NewsDetailView } from "../app/views/news";
import { CallbackView } from "../app/views/auth";
import { ListingApartmentView } from "../app/views/listing";
import CommerceView from "../app/views/commerce/CommerceView";
import { SearchView } from "../app/views/search";

export default function HomeRoutes() {
    return (
        <Switch> 
            <Route exact path={Screens.HOME} render={(p) => { return <HomeView {...p} />; }} />
            <Route exact path={Screens.PROJECT} render={(p) => { return <ProjectView {...p} />; }} />
            <Route exact path={Screens.APARTMENT} render={(p) => { return <ApartmentView {...p} />; }} />
            <Route exact path={Screens.COMMERCE} render={(p) => { return <CommerceView {...p} />; }} />
            <Route exact path={Screens.LISTING_PROJECT} render={(p) => { return <ListingProjectView {...p} />; }} />
            <Route exact path={Screens.LISTING_APARTMENT} render={(p) => { return <ListingApartmentView {...p} />; }} />
            <Route exact path={Screens.NEWS} render={(p) => { return <NewsView {...p} />; }} />
            <Route exact path={Screens.NEWS_DETAIL} render={(p) => { return <NewsDetailView {...p} />; }} />
            <Route path={Screens.CALLBACK} component={CallbackView} />
            <Route path={Screens.SEARCH} component={SearchView} />
        </Switch>
    );
}
