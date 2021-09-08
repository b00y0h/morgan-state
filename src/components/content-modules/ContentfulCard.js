import React from 'react'
import Card from '../Card'

function ContentfulCard({ data }) {
  const { image, childContentfulCardDescriptionTextNode, childContentfulCardTitleTextNode } = data
  const { childMarkdownRemark: description } = childContentfulCardDescriptionTextNode
  const { childMarkdownRemark: title } = childContentfulCardTitleTextNode
  return <Card title={title.html} description={description.html} image={image.image} />
}

export default ContentfulCard
