const users = [
    {
        id: 1,
        username: "JohnDoe322",
        avatar: "GG",
        groups: [1],
        meetings: [1]
    },
    {
        id: 2,
        username: "JaneDoe1337",
        avatar: "GG",
        groups: [1, 2],
        meetings: [2]
    },
    {
        id: 3,
        username: "ElonMuskReal",
        avatar: "GG",
        groups: [1, 2, 3],
        meetings: [2, 3]
    },
    {
        id: 4,
        username: "XiJinpingReal",
        avatar: "GG",
        groups: [],
        meetings: [3]
    },
    {
        id: 5,
        username: "NicolAnistonLol",
        avatar: "GG",
        groups: [4],
        meetings: []
    }
];

const groups = [
    {
        id: 1,
        name: "Cat lovers",
        users: [1, 2, 3],
        meetings: [1]
    },
    {
        id: 2,
        name: "Dog lovers",
        users: [2, 3],
        meetings: [2]
    },
    {
        id: 3,
        name: "DogeCoin investement",
        users: [3],
        meetings: [3]
    },
    {
        id: 4,
        name: "Modelling",
        users: [4],
        meetings: []
    }
];

const meetings = [
    {
        id: 1,
        name: "Cat lovers conference",
        users: [1],
        groups: [1]
    },
    {
        id: 2,
        name: "Dog lovers conference",
        users: [2],
        groups: [2]
    },
    {
        id: 3,
        name: "DogeCoin conference",
        users: [3],
        groups: [3]
    }
];

export const dataAll = [
    users,
    groups,
    meetings
]