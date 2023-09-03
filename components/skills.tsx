
export default function Skills() {
  return (
    <div className="pb-6 mx-auto">
        <h2 className="font-semibold text-3xl text-center p-6" id="about">Skills</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 text-center">
            <div className="border-gray-100 border-2 p-6">
                <h3 className="font-semibold text-xl">Backend</h3>
                <ul>
                    <li>Scala</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Golang</li>
                </ul>
            </div>
            <div className="border-gray-100 border-2 p-6">
                <h3 className="font-semibold text-xl">Data Engineering</h3>
                <ul>
                    <li>Spark</li>
                    <li>Hadoop</li>
                    <li>Postgres</li>
                    <li>HDFS</li>
                </ul>
            </div>
            <div className="border-gray-100 border-2 p-6">
                <h3 className="font-semibold text-xl">AI</h3>
                <ul>
                    <li>Computer Vision</li>
                    <li>Probability & Statistics</li>
                    <li>Model Integration</li>
                    <li>TensorFlow</li>
                </ul>
            </div>
            <div className="border-gray-100 border-2 p-6">
                <h3 className="font-semibold text-xl">Infrastructure</h3>
                <ul>
                    <li>AWS</li>
                    <li>GCP</li>
                    <li>Azure</li>
                    <li>Kubernetes</li>
                    <li>CICD</li>
                </ul>
            </div>
            <div className="border-gray-100 border-2 p-6">
                <h3 className="font-semibold text-xl"> Front End + Design</h3>
                <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Figma</li>
                    <li>Design Systems</li>
                    <li>GraphQL</li>
                    <li>CICD</li>
                </ul>
            </div>
            <div className="border-gray-100 border-2 p-6">
                <h3 className="font-semibold text-xl"> Engineering + Program + Product Management</h3>
                <ul>
                    <li>Mentorship and Coaching</li>
                    <li>Org Direction</li>
                    <li>Roadmaps</li>
                    <li>Planning</li>
                    <li>Product Requirement Document</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
