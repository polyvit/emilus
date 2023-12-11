import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Table, Tag, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { loadUsers } from "redux/actions/Users";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { success } from "concurrently/src/defaults";
import Loading from "../../../components/shared-components/Loading";

class UserList extends Component {
  state = {
    userProfileVisible: false,
    selectedUser: null,
  };

  componentDidMount() {
    console.log(this.props);
    this.props.fetchUsers();
  }

  // deleteUser = (userId) => {
  //   this.setState({
  //     users: this.state.users.filter((item) => item.id !== userId),
  //   });
  //   message.success({ content: `Deleted user ${userId}`, duration: 2 });
  // };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  render() {
    const { userProfileVisible, selectedUser } = this.state;
    const { list, status } = this.props;

    const tableColumns = [
      {
        title: "User",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src="https://dummyimage.com/50x50/ccc/fff&text=No+photo"
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Company name",
        dataIndex: "company",
        render: (company) => company.name,
      },
      {
        title: "City",
        dataIndex: "address",
        render: (address) => (
          <Tag className="text-capitalize">{address.city}</Tag>
        ),
      },
      {
        title: "Website",
        dataIndex: "website",
        render: (website) => <a href={website}>{website}</a>,
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  this.showUserProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  // this.deleteUser(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <>
        {status === "received" && (
          <Card bodyStyle={{ padding: "0px" }}>
            <Table
              columns={tableColumns}
              dataSource={list}
              rowKey="id"
              onRow={(record) => {
                return {
                  onClick: () => {
                    this.props.history.push({
                      pathname: `${APP_PREFIX_PATH}/setting`,
                      state: record,
                    });
                  },
                };
              }}
            />
            <UserView
              data={selectedUser}
              visible={userProfileVisible}
              close={() => {
                this.closeUserProfile();
              }}
            />
          </Card>
        )}
        {status === "loading" && <Loading align="center" cover="page" />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.users.status,
    error: state.users.error,
    list: state.users.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(loadUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
