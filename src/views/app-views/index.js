import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Redirect
          exact
          from={`${APP_PREFIX_PATH}`}
          to={`${APP_PREFIX_PATH}/home`}
        />
        <Route
          path={`${APP_PREFIX_PATH}/home`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/goods`}
          component={lazy(() => import(`./goods`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/categories`}
          component={lazy(() => import(`./categories`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/orders`}
          component={lazy(() => import(`./orders`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/clientslist`}
          component={lazy(() => import(`./users`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/setting`}
          component={lazy(() => import(`./setting`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/planner`}
          component={lazy(() => import(`./planner`))}
        />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
