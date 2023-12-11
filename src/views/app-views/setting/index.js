import React, { Component } from "react";
import { connect } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import InnerAppLayout from "layouts/inner-app-layout";
import EditProfile from "./EditProfile";
import { setCurrentUser } from "redux/actions/Users";

const SettingOption = ({ match, location }) => {
  return (
    <Menu
      defaultSelectedKeys={`${match.url}/edit-profile`}
      mode="inline"
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key={`${match.url}/edit-profile`}>
        <UserOutlined />
        <span>Edit Profile</span>
        <Link to={`${match.url}/edit-profile`} />
      </Menu.Item>
    </Menu>
  );
};

const SettingContent = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/edit-profile`} />
      <Route path={`${match.url}/edit-profile`} component={EditProfile} />
    </Switch>
  );
};

export class Setting extends Component {
  componentDidMount() {
    this.props.setCurrentUser(this.props.location.state);
  }
  render() {
    return (
      <InnerAppLayout
        sideContentWidth={320}
        sideContent={<SettingOption {...this.props} />}
        mainContent={<SettingContent {...this.props} />}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Setting);
