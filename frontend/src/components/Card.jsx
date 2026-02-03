import { useLanguage } from '../contexts/LanguageContext'
import './Card.css'

function Card({ title, description, image, tags, link, viewMoreText }) {
  const { t } = useLanguage()

  return (
    <div className="card">
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          {tags && tags.length > 0 && (
            <div className="card-tags">
              {tags.map((tag, index) => (
                <span key={index} className="card-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card

