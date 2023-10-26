var ReactRotatingText = require('react-rotating-text');

export const Home = () => {
    return(
        // <div className="h-90vh flex flex-row justify-center items-center">
        <div className="h-90vh grid grid-cols-2 gap-4 place-content-around">
            <div>
                <article className="prose dark:prose-invert lg:prose-xl">
                    <h1>Hi, I'm Kok Fong</h1>
                    <h3>
                        {"I  "}
                        <ReactRotatingText items={
                            [
                                'code, I create and I captivate', 
                                'am driven by passion and precision', 
                                'believe in the art of coding',
                                'transform ideas into experiences',
                                'turn vision into virtual realities',
                                'innovate with every line'
                            ]
                        } />
                    </h3>
                </article>
            </div>
            <div>
                <article className="prose dark:prose-invert lg:prose-xl">
                    {/* <h3>Hi, i'm Kok Fong</h3>
                    <br/>
                    <h2>
                        <ReactRotatingText items={['first', 'second', 'third']} />
                    </h2> */}
                </article>
            </div>
            
            
        </div>
    )
}