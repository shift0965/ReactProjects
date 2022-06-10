import { StyledCard } from "./styles/Card.styled"


export default function Card({item: {id, title, body, image}}) {
    
    return(
        <StyledCard Even = {(id%2 === 0)}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt="an image" />
            </div>
        </StyledCard>
    )
}