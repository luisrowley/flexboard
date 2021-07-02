export const unevenLayout = {
    "title": "uneven",
    "rows": [
      {
        "rowspan": 1,
        "tiles": [
          {
            "colspan": 4,
            "size": "lg",
          },
          {
            "colspan": 4,
            "size": "md",
          },
          {
            "colspan": 4,
            "size": "md",
          }
        ]
      },
      {
        "rowspan": 1,
        "tiles": [
          {
            "colspan": 5,
            "size": "md",
          },
          {
            "colspan": 4,
            "size": "md",
          },
          {
            "colspan": 3,
            "size": "md",
          }
        ]
      },
      {
        "rowspan": 1,
        "tiles": [
          {
            "colspan": 3,
            "size": "md",
          },
          {
            "colspan": 3,
            "size": "md",
          },
          {
            "colspan": 6,
            "size": "md",
          }
        ]
      }
    ]
};

export const nestedLayout = {
    "title": "nested",
    "rows": [
        {
        "rowspan": 1,
        "tiles": [
            {
            "colspan": 4,
            "size": "md",
            "isAuto": false,
            "component": "TileComponent"
            },
            {
            "colspan": 2,
            "size": "lg",
            "isAuto": false,
            "component": "TileComponent",
            "rows": [
                {
                "rowspan": 1,
                "tiles": [
                    {
                    "colspan": 12,
                    "size": "md",
                    "isAuto": false,
                    "component": "TileComponent"
                    }
                ]
                },
                {
                "rowspan": 1,
                "tiles": [
                    {
                    "colspan": 12,
                    "size": "md",
                    "isAuto": false,
                    "component": "TileComponent"
                    }
                ]
                }
            ]
            },
            {
            "colspan": 4,
            "size": "md",
            "isAuto": false,
            "component": "TileComponent"
            },
            {
            "colspan": 2,
            "size": "md",
            "isAuto": false,
            "component": "TileComponent"
            }
        ]
        },
        {
        "rowspan": 1,
        "tiles": [
            {
            "colspan": 4,
            "size": "md",
            "isAuto": false,
            "component": "TileComponent"
            },
            {
            "colspan": 4,
            "size": "md",
            "isAuto": false,
            "component": "TileComponent"
            },
            {
            "colspan": 4,
            "size": "md",
            "isAuto": false,
            "component": "TileComponent"
            }
        ]
        }
    ]
};
