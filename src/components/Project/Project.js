import pawstime from '../../assets/pawstime.png';
import realTimeMusicPlayer from '../../assets/realTimeMusicPlayer.jpg';
import world_stock from '../../assets/world_stock.png';

const Project = () => {
    const projects = [
        {
            title: "PawsTime",
            description: "PawsTime is a full-stack web application which empowers veterinary practices with online appointment booking, secure logins, dedicated dashboards for both admins and pet owners, and AWS-powered CI/CD for reliable performance and scalability.",
            image: pawstime,
            link: "https://github.com/AmishaMe24/PawsTime",
            technologiesUsed: ["React", "Node.js", "Express", "MongoDB", "AWS"]
        },
        {
            title: "Exploring World Stock Prices with Machine Learning",
            description: "Architected robust ML pipeline to forecast stock prices, achieving peak 95% classification accuracy. Excelled in data cleaning, preprocessing, visualization, regression, classification, clustering, association analysis, feature engineering, model selection, evaluation metrics, and statistical data analysis to ensure accurate predictions.",
            image: world_stock,
            link: "#",
            technologiesUsed: ["Scikit-learn", "TensorFlow", "Python", "Statistics"]
        },
        {
            title: "Real-Time Emotion-Based Music Player",
            description: "Imagine a music player that reads your mood! It analyzes your facial expressions (thanks to OpenCV!) and uses a powerful neural network (CNN) to predict your emotions. Feeling happy? Get ready for some upbeat tunes! Feeling stressed? Calming melodies await.  This project showcases my expertise in computer vision, deep learning, and creating an interactive music experience.",
            image: realTimeMusicPlayer,
            link: "https://github.com/shahnitav/Real-Time-Emotion-Recognition-Based-Music-Player",
            technologiesUsed: ["Python", "TensorFlow", "CNNs", "OpenCV"]
        }
    ];

    const badgeColor = ["bg-red-100 text-red-800", "bg-indigo-100 text-indigo-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800", "bg-yellow-100 text-yellow-800"];

    return (
        <div>
            <h1 className='text-4xl md:text-5xl text-center pt-10'>Projects</h1>

            <div className='flex justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 lg:gap-20 p-10">
                    {projects.map((project, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                            <div className='flex justify-center items-center'>
                                <a href={project.link}>
                                    <img className="rounded-t-lg fixed-height" src={project.image} alt={project.title} />
                                </a>
                            </div>
                            <div className="p-5">
                                <a href={project.link}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 text-justify">{project.description}</p>
                                <a href={project.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7685d6] rounded-lg hover:bg-[#6E7DCE] focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    View On GitHub
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologiesUsed.map((tech, techIndex) => (
                                        <span key={techIndex} className={`text-xs font-medium px-2.5 py-0.5 rounded ${badgeColor[techIndex]}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
