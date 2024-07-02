import "./About.scss"

function About() {
    return (
        <section className="about">
            <div className="about__sections">
                <h2 className="about__headers">Discover Our Purpose</h2>
                <p className="about__description">While working as an Uber Eats driver, I faced challenges finding public washrooms that were both accessible and convenient. Rate My Washrooms is a website designed to help anyone alleviate the stress of finding suitable restroom facilities anywhere. Our goal is to meet your needs and improve your daily experience in unfamiliar areas.</p>
            </div>
            <div className="about__sections">
                <h2 className="about__headers">Write a Review, or Post a new Washroom Discovery</h2>
                <p className="about__description">Share your honest review of a restroom you've used to enhance the experience for others, or disclose a hidden restroom to benefit the community.</p>
            </div>
        </section>
    )
}
export default About;