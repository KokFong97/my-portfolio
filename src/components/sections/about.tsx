export const About = () => {
    return(
        <section className="bg-zinc-50 dark:bg-gray-800 relative">
            <div id="about" className="absolute -top-16"></div>
            <div className="container py-20 h-auto md:h-screen flex flex-col ">
                <article className="prose dark:prose-invert self-center">
                    <h1 className="underline underline-offset-8">
                        {'ABOUT ME'}
                    </h1>
                </article>
                <div className="flex py-20 md:flex-row flex-col ">
                        <article className=" mx-auto px-10 md:py-10 prose dark:prose-invert">
                            <h3>
                                {'Get to know me!'}
                            </h3>
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
                        
                        <article className="mx-auto px-10 md:py-10 prose dark:prose-invert">
                            <h3>
                                {'My Skills'}
                            </h3>
                            <p>
                                {`I'm a full-stack web developer based in Singapore. 
                                With over five years of experience in the industry, I specialize in creating responsive and 
                                user-friendly websites that help businesses achieve their goals. 
                                I'm passionate about using technology to solve problems and I'm always looking for new challenges to tackle. 
                                When I'm not coding, you can find me hiking in the mountains or trying out new recipes in the kitchen. 
                                Thanks for visiting my portfolio and I look forward to connecting with you!`}
                            </p>
                        </article>
                    </div>
            </div>
        </section>
    )
}