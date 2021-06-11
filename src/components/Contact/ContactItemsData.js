const phoneText = (
    <>
        +994 51 777-77-99
        <br />
        +994 51 770-70-90
    </>
);

const locationText = (
    <>
        2548 Lorem ipsum dolor,
        <br />
        Baku, Azerbaijan
    </>
);

const workTimeText = (
    <>
        7 Days a week,
        <br />
        from 10 AM to 6 PM
    </>
);


export const ContactItemsData = [
    {
        id: 1,
        icon: <i className="flaticon-phone-call"></i>,
        title: "LET’S HAVE A CHAT!",
        content: phoneText
    },
    {
        id: 2,
        icon: <i className="flaticon-location"></i>,
        title: "VISIT OUR LOCATION",
        content: locationText
    },
    {
        id: 3,
        icon: <i className="flaticon-wall-clock"></i>,
        title: "WORK TIME",
        content: workTimeText
    }
];