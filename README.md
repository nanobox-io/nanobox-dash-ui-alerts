# Nanobox Alerts UI

Javascript component for

<!-- Note, don't edit below here, automatically generated on yarn build -->
### Example Data Structure :
``` javascript
{
  "triggerSets": [
    {
      "id": "abcdef12345",
      "name": "Test Set 1",
      "triggers": [
        "infrastructure.host-offline",
        "infrastructure.sequre-offline"
      ],
      "receipients": [
        {
          "mode": "email",
          "target": "$collaborators"
        },
        {
          "mode": "email",
          "target": "admin@somedomain.com"
        },
        {
          "mode": "text",
          "target": "208.555.1234"
        }
      ]
    },
    {
      "id": "abcdef98765",
      "name": "Test Set 2",
      "triggers": [
        "infrastructure.host-offline"
      ],
      "receipients": [
        {
          "mode": "email",
          "target": "$collaborators"
        }
      ]
    }
  ],
  "alertCategories": [
    {
      "title": "infrastructure",
      "alerts": [
        {
          "id": "infrastructure.host-offline",
          "txt": "Host Goes Offline"
        },
        {
          "id": "infrastructure.container-offline",
          "txt": "Container Goes Offline"
        },
        {
          "id": "infrastructure.sequre-offline",
          "txt": "Sequence Goes Offline"
        }
      ]
    },
    {
      "title": "Hosts",
      "alerts": [
        {
          "id": "host.host-offline",
          "txt": "Host Goes Offline"
        },
        {
          "id": "host.sequre-offline",
          "txt": "Sequence Goes Offline"
        }
      ]
    },
    {
      "title": "Components",
      "alerts": [
        {
          "id": "component.host-offline",
          "txt": "Host Goes Offline"
        },
        {
          "id": "component.container-offline",
          "txt": "Container Goes Offline"
        },
        {
          "id": "component.sequre-offline",
          "txt": "Sequence Goes Offline"
        }
      ]
    }
  ]
}
```