// importing images
import artificialIntelligence from '../../assets/img/books/all-books/artificial-intelligence.jpg';
import country from '../../assets/img/books/all-books/country.jpg';
import doctorWho from '../../assets/img/books/all-books/doctor-who.jpg';
import gulliversTravels from "../../assets/img/books/all-books/gulliver's-travels.jpg";
import lesMiserables from '../../assets/img/books/all-books/les-miserables.jpg';
import nineteenEightyFour from '../../assets/img/books/all-books/nineteen-eighty-four.jpg';
import pompeii from '../../assets/img/books/all-books/pompeii.jpg';
import theAdventuresOfSherlockHolmes from '../../assets/img/books/all-books/the-adventures-of-sherlock-holmes.jpg';
import theCast from '../../assets/img/books/all-books/the-cast.jpg';
import theDuchess from '../../assets/img/books/all-books/the-duchess.jpg';
import theHillWeClimb from '../../assets/img/books/all-books/the-hill-we-climb.jpg';
import donQuijote from '../../assets/img/books/all-books/don-quijote.jpg';
import theInvincibleSummerOfJuniperJones from '../../assets/img/books/all-books/the-invincible-summer-of-juniper-jones.jpg';
import beforeTheCoffeeGetsCold from '../../assets/img/books/all-books/before-the-coffee-gets-cold.jpg';


export const BooksData = [
    {
        id: 1,
        img: artificialIntelligence,
        author: "Matthew Burgess",
        title: "Artificial Intelligence",
        genre: "IndustrialApplications",
        price: 12.00,
        label: "New",
        rating: "★★★★★",
        category: "New Releases",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false
    },
    {
        id: 2,
        img: country,
        author: "Danielle Steel",
        title: "Country",
        genre: "ContemporaryFiction",
        price: 11.00,
        label: "",
        rating: "★★★★★",
        category: "Other",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false
    },
    {
        id: 3,
        img: doctorWho,
        author: "Sophie Aldred",
        title: "Doctor Who",
        genre: "ScienceFiction",
        price: 14.00,
        label: "New",
        rating: "★★★★★",
        category: "New Releases",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false
    },
    {
        id: 4,
        img: gulliversTravels,
        author: "Jonathan Swift",
        title: "Gulliver's Travels",
        genre: "Classic",
        price: 4.00,
        label: "",
        rating: "★★★★★",
        category: "Best Seller",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false
    },
    {
        id: 5,
        img: lesMiserables,
        author: "Victor Hugo",
        title: "Les Miserables",
        genre: "Classic",
        previousPrice: 20.00,
        price: 17.00,
        label: "Sale 15%",
        rating: "★★★★★",
        category: "Best Seller",
        hasDiscount: true,
        isNew: false,
        count: 1,
        isInCart: false
    },
    {
        id: 6,
        img: nineteenEightyFour,
        author: "George Orwell",
        title: "1984",
        genre: "Novel",
        price: 9.00,
        label: "",
        rating: "★★★★★",
        category: "Best Seller",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false
    },
    {
        id: 7,
        img: pompeii,
        author: "Robert Harris",
        title: "Pompeii",
        genre: "ContemporaryFiction",
        price: 12.00,
        label: "",
        rating: "★★★★★",
        category: "Other",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false
    },
    {
        id: 8,
        img: theAdventuresOfSherlockHolmes,
        author: "Arthur Conan Doyle",
        title: "The Adventures of Sherlock Holmes",
        genre: "Classic",
        price: 15.00,
        label: "",
        rating: "★★★★★",
        category: "Other",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false
    },
    {
        id: 9,
        img: theCast,
        author: "Danielle Steel",
        title: "The Cast",
        genre: "ContemporaryFiction",
        price: 9.00,
        label: "",
        rating: "★★★★★",
        category: "Other",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false
    },
    {
        id: 10,
        img: theDuchess,
        author: "Danielle Steel",
        title: "The Duchess",
        genre: "Romance",
        price: 9.20,
        label: "",
        rating: "★★★★★",
        category: "Other",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false
    },
    {
        id: 11,
        img: theHillWeClimb,
        author: "Amanda Gorman",
        title: "The Hill We Climb",
        genre: "Poetry",
        price: 39.99,
        label: "New",
        rating: "★★★★★",
        category: "New Releases",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false
    },
    {
        id: 12,
        img: donQuijote,
        author: "Miguel de Cervantes",
        title: "Don Quijote",
        genre: "Novel",
        previousPrice: 16.00,
        price: 14.00,
        label: "Sale 12.5%",
        rating: "★★★★★",
        category: "Best Seller",
        hasDiscount: true,
        isNew: false,
        count: 1,
        isInCart: false
    },
    {
        id: 13,
        img: theInvincibleSummerOfJuniperJones,
        author: "Daven Mcqueen",
        title: "The Invincible Summer of Juniper Jones",
        genre: "Historical",
        price: 15.00,
        label: "New",
        rating: "★★★★★",
        category: "New Releases",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false
    },
    {
        id: 14,
        img: beforeTheCoffeeGetsCold,
        author: "Toshikazu Kawaguchi",
        title: "Before the Coffee Gets Cold",
        genre: "ContemporaryFiction",
        price: 16.00,
        label: "New",
        rating: "★★★★★",
        category: "New Releases",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false
    }
];