export const program =
          {
    
            "id": "2766fc9a-b095-11ed-9bd8-0242ac110002",
    
            "name": "IT Technologie",
    
            "lastchange": "2023-04-19T08:00:00",
    
            "type": {
    
              "id": "fd4f0980-9315-11ed-9b95-0242ac110002",
    
              "name": "bakalářský prezenční 3 roky čeština",
    
              "level": {
    
                "id": "5c549cae-930e-11ed-9b95-0242ac110002",
    
                "name": "bakalářský"
    
              },
    
              "form": {
    
                "id": "19018d2c-930e-11ed-9b95-0242ac110002",
    
                "name": "prezenční"
    
              },
    
              "language": {
    
                "id": "36e9a40a-930e-11ed-9b95-0242ac110002",
    
                "name": "čeština"
    
              },
    
              "title": {
    
                "id": "d1431d9c-930e-11ed-9b95-0242ac110002",
    
                "name": "Bc."
    
              }
    
            },
    
            "subjects": [
    
              {
    
                "id": "ce250a68-b095-11ed-9bd8-0242ac110002",
    
                "name": "Programování",
    
                "lastchange": "2023-04-19 08:00:00",
    
                "semesters": [
    
                  {
    
                    "id": "ce250af4-b095-11ed-9bd8-0242ac110002",
    
                    "order": 1,
    
                    "lastchange": "2023-04-19T08:00:00",
    
                    "topics": [
    
                      {
    
                        "id": "ce250b44-b095-11ed-9bd8-0242ac110002",
    
                        "name": "Úvod",
    
                        "lastchange": "2023-04-19 08:00:00"
    
                      }
    
                    ],
    
                    "credits": 24,
    
                    "classificationType": {
    
                      "id": "a00a0642-b095-11ed-9bd8-0242ac110002",
    
                      "name": "Z+Zk"
    
                    }
    
                  },
                  

    
                ]
    
              }
    
            ]
    
          }

export const fakeQuery = async (id) => ({json: () => {
    const json = JSON.stringify(program)
    const result = JSON.parse(json)
    return {'programById': {...result, id: id }}
}})