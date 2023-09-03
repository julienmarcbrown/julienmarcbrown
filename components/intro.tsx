import Image from "next/image";

const Intro = () => {
    return (
        <div className="flex-wrap md:justify-between mx-auto text-center mb-24 py-12">
            <div className="md:pr-12 md:float-left font-medium text-gray-600">
                <h1 id="/" className="text-2xl md:text-4xl font-bold tracking-loose">
                    Hello, I'm Julien!
                </h1>
                <h2 className="text-xl text-gray-800 pb-12">Software Engineer | Engineering Leader</h2>
                <ul>
                    <li>Software Development </li>
                    <li> Engineering Management </li>
                    <li> Product Management </li>
                    <li> Geospatial Data</li>
                    <li> Data Engineering </li>
                    <li> Artificial Intelligence </li>
                    <li> Machine Learning </li>
                    <li> Computer Vision</li>
                </ul>
            </div>
            <div className="md:pl-12 left-1 flex justify-center md:justify-start">
                <Image src="/assets/julien.jpeg" alt="Julien Marc Brown" width="200" height="200"></Image>
            </div>
        </div>
    )
}

export default Intro
