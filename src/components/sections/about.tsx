import { Badge } from "../ui/badge"

export const About = () => {
    return(
        <section className="bg-zinc-100 dark:bg-gray-800 relative">
            <div id="about" className="absolute -top-16"></div>
            <div className="container py-20 h-auto md:h-screen flex flex-col ">
                <article className="prose dark:prose-invert self-center flex flex-col items-center">
                    <h1 className="underline underline-offset-8">
                        {'ABOUT ME'}
                    </h1>
                    <p className="text-center">
                        {"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"}
                    </p>
                </article>
                <div className="flex pt-20 md:flex-row flex-col w-full">
                        <article className="mx-auto md:px-10 md:py-10 prose dark:prose-invert w-full">
                            <h2 className="text-center sm:text-left">
                                {'Get to know me!'}
                            </h2>
                            <p>
                                {"I'm a"} <span className="font-semibold">full-stack web developer</span> {`based in Singapore. 
                                With only a year of experience in the industry, I specialize in creating`} <span className="font-semibold">responsive and 
                                user-friendly</span> {"websites that help businesses achieve their goals."}
                            </p>
                            <p>
                                {"On the backend, I have a strong foundation in developing"} <span className="font-semibold">robust, scalable and secure </span>
                                {"web applications that ensure seamless functionality and optimal performance."}
                            </p>
                            <p>
                                {`I'm passionate about using technology to solve problems and I'm always looking for new challenges to tackle. 
                                When I'm not coding, you can find me hiking in the mountains or trying out new recipes in the kitchen. 
                                Thanks for visiting my portfolio and I look forward to connecting with you!`}
                            </p>
                        </article>
                        
                        <article className="mx-auto md:px-10 pt-10 prose dark:prose-invert w-full">
                            <h2 className="text-center sm:text-left">
                                {'My Skills'}
                            </h2>
                            <div className="flex flex-wrap gap-2 md:gap-4">
                                <Badge variant="default">Javascript</Badge>
                                <Badge variant="default">HTML</Badge>
                                <Badge variant="default">CSS</Badge>
                                <Badge variant="default">NextJS</Badge>
                                <Badge variant="default">Mongo</Badge>
                                <Badge variant="default">Amazon Web Services</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                                <Badge variant="default">Badge</Badge>
                            </div>
                        </article>
                    </div>
            </div>
        </section>
    )
}