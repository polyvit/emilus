import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  SettingOutlined,
  PictureOutlined,
  GroupOutlined,
  TeamOutlined,
  MailOutlined,
  GiftOutlined,
  ShopOutlined,
} from "@ant-design/icons";

import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "basic",
    path: `${APP_PREFIX_PATH}/basic`,
    title: "basic",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "dashboard",
        path: `${APP_PREFIX_PATH}/home`,
        title: "dashboard",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "planner",
        path: `${APP_PREFIX_PATH}/planner`,
        title: "2D planner",
        icon: GroupOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "catalog",
        title: "catalog",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "goods",
            path: `${APP_PREFIX_PATH}/goods`,
            title: "goods",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "categories",
            path: `${APP_PREFIX_PATH}/categories`,
            title: "categories",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/orders`,
        title: "orders",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "clients",
        title: "clients",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "clients-list",
            path: `${APP_PREFIX_PATH}/clientslist`,
            title: "clients list",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "clients-groups",
            path: `${APP_PREFIX_PATH}/clients-groups`,
            title: "clients groups",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/banners`,
        title: "banners",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "promocodes",
        path: `${APP_PREFIX_PATH}/promocodes`,
        title: "promocodes",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "shops",
        path: `${APP_PREFIX_PATH}/shops`,
        title: "offline shops",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "addresses",
            path: `${APP_PREFIX_PATH}/addresses`,
            title: "addresses",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "geozones",
            path: `${APP_PREFIX_PATH}/geozones`,
            title: "geozones",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "staff",
        path: `${APP_PREFIX_PATH}/staff`,
        title: "staff",
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "letters",
        path: `${APP_PREFIX_PATH}/letters`,
        title: "letters",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/system`,
    title: "system",
    breadcrumb: false,
    submenu: [
      {
        key: "settings",
        path: `${APP_PREFIX_PATH}/settings`,
        title: "settings",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
