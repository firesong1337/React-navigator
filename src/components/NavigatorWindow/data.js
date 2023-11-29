const users = [
    {
        id: 1,
        name: "JohnDoe322",
        avatar: "https://i2-prod.birminghammail.co.uk/incoming/article23237977.ece/ALTERNATES/s1200c/3_Peaky-Blinders.jpg",
        groups: [1],
        meetings: [1]
    },
    {
        id: 2,
        name: "JaneDoe1337",
        avatar: "", //https://cdn.vectorstock.com/i/preview-1x/80/84/person-gray-photo-placeholder-woman-vector-22808084.jpg
        groups: [1, 2],
        meetings: [2]
    },
    {
        id: 3,
        name: "ElonMuskReal",
        avatar: "https://hips.hearstapps.com/hmg-prod/images/musk-weed-1536332069.jpg?crop=0.502xw:1.00xh;0.356xw,0&resize=1200:*",
        groups: [1, 2, 3],
        meetings: [2, 3]
    },
    {
        id: 4,
        name: "XiJinpingReal",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/b/be/Xi_Jinping_with_Macron_and_Von_der_Leyen_2023.jpg",
        groups: [],
        meetings: [3]
    },
    {
        id: 5,
        name: "NicolAnistonLol",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nicole_Aniston_2012.jpg/800px-Nicole_Aniston_2012.jpg",
        groups: [4],
        meetings: []
    }
];

const groups = [
    {
        id: 1,
        name: "Cat lovers",
        avatar: "https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/bltd23d698154616afc/63c73a89a362596b80751065/img-cat-whiskers-101-header.jpg",
        users: [1, 2, 3],
        meetings: [1]
    },
    {
        id: 2,
        name: "Dog lovers",
        avatar: "https://m.media-amazon.com/images/I/51Z1H2k9MBL.jpg",
        users: [2, 3],
        meetings: [2]
    },
    {
        id: 3,
        name: "DogeCoin investement",
        avatar: "https://www.usnews.com/object/image/0000018a-2dfa-d56c-adbf-bffab5060000/gettyimages-1252647924.jpg?update-time=1692988562702&size=responsive640",
        users: [3],
        meetings: [3]
    },
    {
        id: 4,
        name: "Modelling",
        avatar: "https://media.vanityfair.com/photos/61bb1d0b6678bd32599d95bf/4:3/w_1440,h_1080,c_limit/PRADA%20THE%20GALLERIA_01.jpg",
        users: [4],
        meetings: []
    }
];

const meetings = [
    {
        id: 1,
        name: "Cat lovers conference",
        avatar: "https://protectapet.com/cdn/shop/articles/275083092_4810385262330466_2561038812494645532_n_1080x.jpg?v=1646747820",
        users: [1],
        groups: [1]
    },
    {
        id: 2,
        name: "Dog lovers conference",
        avatar: "https://i0.wp.com/capdt.ca/wp-content/uploads/2023/01/2023-Conference.jpg?fit=900%2C599&ssl=1",
        users: [2],
        groups: [2]
    },
    {
        id: 3,
        name: "DogeCoin conference",
        avatar: "https://blockworks.co/_next/image?url=https://blockworks-co.imgix.net/wp-content/uploads/2023/01/dogecoin-small.jpg&w=1920&q=75&webp=false",
        users: [3],
        groups: [3]
    }
];

export const usersData = users
export const groupsData = groups
export const meetingsData = meetings