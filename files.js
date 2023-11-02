export const FILES = [
    {
        id: 1,
        type: "company",
        url: "https://www.scribd.com/document/615203472/Chainsaw-Man-Ch-1?utm_medium=cpc&utm_source=google_search&utm_campaign=3Q_Google_DSA_NB_RoW_P1_UGC&utm_adgroup=Documents&utm_term=&utm_matchtype=&utm_device=c&utm_network=g&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NOGKUDCt5h76JPDmCxuK9vJDhF03Rl0o7PWQGj7fDjvGYBnKoMJdnRoCjpMQAvD_BwE",
        date: "2020-06-01",
        name: "Chainsaw Man Manga",
        fileType: "pdf"
    },
    {
        id: 2,
        type: "uploaded",
        url: "https://static1.squarespace.com/static/56e83dad746fb9bea10be87a/t/5ff391d7634c4829a8fd9042/1609798103945/Sakura.pdf",
        date: "2021-08-21",
        name: "Sakura",
        fileType: "pdf"
    },
    {
        id: 3,
        type: "uploaded",
        url: "https://www.planetebook.com/free-ebooks/the-adventures-of-huckleberry-finn.pdf",
        date: "2022-10-04",
        name: "The Adventures of Huckleberry Finn",
        fileType: "pdf"
    },
    {
        id: 4,
        type: "company",
        url: "https://www.planetebook.com/free-ebooks/pride-and-prejudice.pdf",
        date: "2022-04-22",
        name: "Pride And Prejudice",
        fileType: "pdf"
    },
    {
        id: 5,
        type: "company",
        url: "https://www.planetebook.com/free-ebooks/1984.pdf",
        date: "2019-07-01",
        name:"1984",
        fileType: "pdf"
    },
  ];
  
  export function getAllFiles() {
    return FILES;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = FILES.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return FILES.find((event) => event.id === id);
  }