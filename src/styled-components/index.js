import styled from "styled-components"
import { Link } from "gatsby"

export const BlogLink = styled(Link)`
  text-decoration: none;
  color: rgb(163, 98, 180);
`

export const BlogTitle = styled.h3`
  margin-bottom: 20px;
  font-family: 'Raleway', sans-serif;
`

export const MainBlogTitle = styled.h2`
  font-family: 'Raleway', sans-serif;
  margin-bottom: 20px;
  `

export const Divider = styled.div`
  border-left:1px solid #333; 
  height: 20px;
  display: inline;
  margin: 0 10px;
`

export const PrePost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.85em;
  color: #413975;
  font-weight: 500;
`