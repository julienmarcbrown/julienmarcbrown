import Image from "next/image";

const Intro = () => {
    return (
        <div className="flex-wrap md:justify-between mx-auto text-center md:py-16">
            <div className="md:p-12 md:float-left font-medium text-gray-600">
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
            <button className="my-12 mx-auto text-center bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <a href="#contact">Contact me</a>
            </button>
        </div>
    )
}

export default Intro
