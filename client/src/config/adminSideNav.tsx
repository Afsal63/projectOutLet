import React from "react";

import homeButton from "../assets/images/homeBtn.svg";
import callImage from "../assets/images/phoneImage.svg";
import contact from "../assets/images/contact.svg";
import knowledge from "../assets/images/knowledge.svg";
import report from "../assets/images/reportImage.svg";
import admin from "../assets/images/setting.svg";
import { PRIVATE } from "../routes/routes";
const AdminSideNavData = [
  {
    id: "homeButtonNav",
    title: "Overview",
    link: PRIVATE.ADMIN.PAGES.DASHBOARD,
    icon: homeButton,
    className: "",
  },
  {
    id: "callImageNav",
    title: "Call Details",
    link: PRIVATE.ADMIN.PAGES.CALL_DETAILS,
    icon: callImage,
    className: "",
  },
  {
    id: "contactNav",
    title: "Contacts",
    link: PRIVATE.ADMIN.PAGES.CONTACTS,
    icon: contact,
    className: "",
  },
  {
    id: "knowledgeNav",
    title: "Knowledge Base",
    link: PRIVATE.ADMIN.PAGES.KNOWLEDGE,
    icon: knowledge,
    className: "",
  },
  {
    id: "reportNav",
    title: "Reports",
    link: PRIVATE.ADMIN.PAGES.REPORTS,
    icon: report,
    className: "",
  },
  {
    id: "adminNav",
    title: "Admin View",
    link: PRIVATE.ADMIN.PAGES.ADMIN_VIEW,
    icon: admin,
    className: "",
  },
];

export default AdminSideNavData;
