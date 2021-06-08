// importing images
import artificialIntelligence from '../../assets/img/books/other/artificial-intelligence.jpg';
import country from '../../assets/img/books/other/country.jpg';
import doctorWho from '../../assets/img/books/other/doctor-who.jpg';
import gulliversTravels from "../../assets/img/books/other/gulliver's-travels.jpg";
import lesMiserables from '../../assets/img/books/other/les-miserables.jpg';
import nineteenEightyFour from '../../assets/img/books/other/nineteen-eighty-four.jpg';
import pompeii from '../../assets/img/books/other/pompeii.jpg';
import theAdventuresOfSherlockHolmes from '../../assets/img/books/other/the-adventures-of-sherlock-holmes.jpg';
import theCast from '../../assets/img/books/other/the-cast.jpg';
import theDuchess from '../../assets/img/books/other/the-duchess.jpg';
import theHillWeClimb from '../../assets/img/books/other/the-hill-we-climb.jpg';
import donQuijote from '../../assets/img/books/other/don-quijote.jpg';
import theInvincibleSummerOfJuniperJones from '../../assets/img/books/other/the-invincible-summer-of-juniper-jones.jpg';

// importing icons
import { RiStarHalfSFill, RiStarSFill, RiStarLine } from 'react-icons/ri';

export const AllBooks = [
    {
        id: 1,
        img: artificialIntelligence,
        author: "Matthew Burgess",
        title: "Artificial Intelligence",
        price: 12.00,
        rating: { fullStar: <RiStarSFill />, halfStar: <RiStarHalfSFill />, emptyStar: <RiStarLine /> }
    },
    {
        id: 2,
        img: country,
        author: "Danielle Steel",
        title: "Country",
        price: 11.00,
        rating: { fullStar: <RiStarSFill />, halfStar: <RiStarHalfSFill />, emptyStar: <RiStarLine /> }
    },
    {
        id: 3,
        img: doctorWho,
        author: "Sophie Aldred",
        title: "Doctor Who",
        price: 14.00,
        rating: { fullStar: <RiStarSFill />, emptyStar: <RiStarLine /> }
    },
    {
        id: 4,
        img: gulliversTravels,
        author: "Jonathan Swift",
        title: "Gullivers Travels",
        price: 4.00,
        rating: "★★★★★",
        category: "Best Seller"
    },
    {
        id: 5,
        img: lesMiserables,
        author: "Victor Hugo",
        title: "Les Miserables",
        price: 17.00,
        rating: "★★★★★",
        category: "Best Seller"
    },
    {
        id: 6,
        img: nineteenEightyFour,
        author: "George Orwell",
        title: "1984",
        price: 9.00,
        rating: "★★★★★",
        category: "Best Seller"
    },
    {
        id: 7,
        img: pompeii,
        author: "Robert Harris",
        title: "Pompeii",
        price: 12.00,
        rating: { fullStar: <RiStarSFill />, emptyStar: <RiStarLine /> }
    },
    {
        id: 8,
        img: theAdventuresOfSherlockHolmes,
        author: "Arthur Conan Doyle",
        title: "The Adventures of Sherlock Holmes",
        price: 15.00,
        rating: { fullStar: <RiStarSFill /> }
    },
    {
        id: 9,
        img: theCast,
        author: "Danielle Steel",
        title: "The Cast",
        price: 9.00,
        rating: { fullStar: <RiStarSFill />, emptyStar: <RiStarLine /> }
    },
    {
        id: 10,
        img: theDuchess,
        author: "Danielle Steel",
        title: "The Duchess",
        price: 9.20,
        rating: { fullStart: <RiStarSFill />, halfStart: <RiStarHalfSFill />, emptyStart: <RiStarLine /> }
    },
    {
        id: 11,
        img: theHillWeClimb,
        author: "Amanda Gorman",
        title: "The Hill We Climb",
        price: 39.99,
        rating: { fullStar: <RiStarSFill />, emptyStar: <RiStarLine /> }
    },
    {
        id: 12,
        img: donQuijote,
        author: "Miguel de Cervantes",
        title: "Don Quijote",
        price: 14.00,
        rating: "★★★★★",
        category: "Best Seller"
    },
    {
        id: 13,
        img: theInvincibleSummerOfJuniperJones,
        author: "Daven Mcqueen",
        title: "The Invincible Summer of Juniper Jones",
        price: 15.00,
        rating: { fullStar: <RiStarSFill />, halfStar: <RiStarLine /> }
    }
];


export const BestSellerBooks = [
    {
        id: 4,
        img: gulliversTravels,
        author: "Jonathan Swift",
        title: "Gullivers Travels",
        price: 4.00,
        rating: "★★★★★",
        category: "Best Seller"
    },
    {
        id: 5,
        img: lesMiserables,
        author: "Victor Hugo",
        title: "Les Miserables",
        previousPrice: 20.00,
        price: 17.00,
        sale: "Sale 15%",
        rating: "★★★★★",
        category: "Best Seller"
    },
    {
        id: 6,
        img: nineteenEightyFour,
        author: "George Orwell",
        title: "1984",
        price: 9.00,
        rating: "★★★★★",
        category: "Best Seller"
    },
    {
        id: 12,
        img: donQuijote,
        author: "Miguel de Cervantes",
        title: "Don Quijote",
        previousPrice: 16.00,
        price: 14.00,
        sale: "Sale 12.5%",
        rating: "★★★★★",
        category: "Best Seller"
    }
];