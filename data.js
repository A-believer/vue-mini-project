const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children : [
                {
                    label : 'Payment',
                    to : 'payment'
                }
            ]
          },
        ],
      },
    ],
  },
];

const tabs = [
    {
      label: "Tab 1",
      content: "This is content for Tab 1",
    },
    {
      label: "Tab 2",
      content: "This is content for Tab 2",
    },
    {
      label: "Tab 3",
      content: "This is some Random Content",
    },
  ];

export {menus, tabs}