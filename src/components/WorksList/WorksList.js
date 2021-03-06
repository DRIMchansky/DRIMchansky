/* eslint-disable array-callback-return */
// packages
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// components
import WorkItem from '../WorkItem/WorkItem'
// styles
import styles from './WorksList.module.css'

const WorksList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "work" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              date(formatString: "MMMM, YYYY")
              tags
              title
              url
              tech
              githubUrl
            }
          }
        }
      }
    }
  `)
  const works = data.allMarkdownRemark.edges

  return (
    <>
      <ul className={styles.workList}>
        {works.map((item) => {
          const showData = item.node
          const image = showData.frontmatter.image
            ? showData.frontmatter.image.childImageSharp.fluid
            : null
          return (
            <WorkItem
              key={showData.id}
              title={showData.frontmatter.title}
              date={showData.frontmatter.date}
              url={showData.frontmatter.url}
              githubUrl={showData.frontmatter.githubUrl}
              tech={showData.frontmatter.tech}
              tags={showData.frontmatter.tags}
              imageUrl={image}
              html={showData.html}
            />
          )
        })}
      </ul>
    </>
  )
}

export default WorksList
