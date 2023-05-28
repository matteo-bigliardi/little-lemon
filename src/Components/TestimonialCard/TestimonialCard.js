import Star from '../../assets/images/star.png';

export const TestimonialCard = (props) => {
    return (
        <article className="testimonial-card">
            <img src={Star}></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}