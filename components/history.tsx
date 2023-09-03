export default function History() {
    const events = [
        { id: 1, date: 'January 2022 to Present', company: 'Ganze Karte', title: 'Freelance'},
        { id: 2, date: 'January 2022 to January 2023', company: 'Facebook', title: 'Technical Product PM'},
        { id: 3, date: 'January 2021 to January 2022', company: "Moody's Analytics", title: 'Senior Engineering Manager'},
        { id: 4, date: 'January 2018 to January 2022', company: "RMS", title: 'Engineering Manager'},
        { id: 5, date: 'January 2017 to January 2018', company: "RMS", title: 'Tech Lead Manager'},
        { id: 6, date: 'January 2016 to January 2017', company: "RMS", title: 'Senior Software Engineer'},
        { id: 7, date: 'August 2015 to January 2016', company: "RMS", title: 'Software Engineer'},
        { id: 8, date: 'Dec 2014 to August 2015', company: "HWIND Scientific", title: 'Software Engineer'},
        { id: 9, date: 'Oct 2013 to Oct 2014', company: "CampusDust", title: 'Software Engineer (Contract)'},

    ];
    return (
        <div className="w-full md:max-w-2xl mx-auto p-8">
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 left-1/4 h-full w-0.5 bg-gray-300"></div>
                {events.map((event) => (
                    <div key={event.id} className="flex my-4 md:my-8">
                        {/* Date */}
                        <div className="flex-none w-1/4 text-right pr-4">
                            <span className="text-sm md:text-base">{event.date}</span>
                        </div>
                        {/* Event detail */}
                        <div className="flex-grow pl-4">
                            <div className="px-4 py-2 bg-gray-200 rounded-md shadow">
                                <strong>{event.company}</strong><br/>
                                {event.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

