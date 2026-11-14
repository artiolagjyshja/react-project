import React from "react";

const PhotoCard = (props) => {
    return(
       <figure className="photo-card">
        <img src={props.imgSrc} alt={props.imgAlt} />
        <figcaption>
            <p>{props.authorName}</p>
            <a href={props.authorLink}>{props.authorLink}</a>
        </figcaption>
       </figure>
    );
};

export default PhotoCard;