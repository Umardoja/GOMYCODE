import React from 'react'

const CategoryCard = (props) => {
    console.log(props)
    const styles = {
        card: {
            width: "150px",
            height: '200px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0, 0.1)',
        },
        image: {
            borderRadius: '8px',
            width: '100%',
            height: 'auto',
            marginBottom: '8px',
        },
        title: {
            fontSize: '18px',
        }
    }
  return (
    <div style={styles.card} onClick={func}>
        <img style={styles.image} src={props.imgUrl || "https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/awoof_220x220.png"} alt="awoof of the Month" />
        <h3 style={styles.title}>{props.title}</h3>
    </div>
  )
}

export default CategoryCard