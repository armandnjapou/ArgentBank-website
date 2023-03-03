const Feature = ({ iconSrc, altTxt, title, description }) => {
    return (
        <div className="feature-item">
          <img src={iconSrc} alt={altTxt} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {description}
          </p>
        </div>
    );
}

export default Feature;