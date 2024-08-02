import React from 'react'

export function Card({ animalname,image,description,caption,classNameAnimal,classNameImg,classNameP1,classNameP2,Box1 }) {
  return (
    <div className={Box1}>
        <h1 className={classNameAnimal}>{animalname}</h1>
      <img className={classNameImg} src={image} alt={caption} />
      <p className={classNameP1}>Caption:{caption}</p>
      <p className={classNameP2}>Description:{ description }</p>
    </div>
  )
}
