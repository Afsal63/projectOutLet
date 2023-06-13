module.exports = {
  Create_Department: {
    type: "object", //data type
    properties: {
      department: {
        type: "string", // data type
        description: "Department name",
        example: "marketing",
      },
    },
  },
  Admin_SignIn: {
    type: "object", //data type
    properties: {
      email: {
        type: "string", // data type
        description: "Admin email ID",
        example: "sample@gmail.com",
      },
      password: {
        type: "string", // data type
        description: "Admin Password",
        example: "admin123",
      },
    },
  },
  Save_Admin: {
    type: "object", //data type
    properties: {
        token: {
        type: "string", // data type
        description: "Google signin token",
        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViN2RhNWY1Zjc2ZTJiOGVmNDBlMmUiLCJwaG9uZSI6IjExMjIzMzQ0NTUiLCJlbWFpbCI6InNhbXBsZUBnbWFpbC5jb20iLCJzZXNzaW9uSWQiOiI1N2NiMzQwYi00YjE0LTQ2YWYtYjBlOS01YTg1MWE1MTdjN2UiLCJpYXQiOjE2ODU4OTM4NjAsImV4cCI6MTY4NjA2NjY2MH0.Lj3k1EGrQgeGCeIzr1bcwSbC1mESIV8cBHWKp8qQWxc",
      },
    },
  },
  Edit_Department: {
    type: "object", //data type
    properties: {
      id: {
        type: "string", // data type
        description: "Department ID",
        example: "BG1YSESVFAR9BKV94Y83",
      },
      name: {
        type: "string", // data type
        description: "Department New name",
        example: "Sales",
      },
    },
  },
  Create_Agent: {
    type: "object", //data type
    properties: {
      username: {
        type: "string", // data type
        description: "Agent Name. It must be unique",
        example: "Akhil",
      },
      password: {
        type: "string", // data type
        description: "Agent Password",
        example: "Agent123",
      },
      department: {
        type: "string", // data type
        description: "Department Name",
        example: "Marketing",
      },
    },
  },
  Agent_Set_Pwd_And_Name: {
    type: "object", //data type
    properties: {
      oldName: {
        type: "string", // data type
        description: "Agent Name",
        example: "Akhil",
      },
      newName: {
        type: "string", // data type
        description: "Agent New Name",
        example: "Abijith",
      },
      id: {
        type: "string", // data type
        description: "Adent ID",
        example: "3140442e-5f32-4190-ac15-7e0d766401a0",
      },
    },
  },
};
