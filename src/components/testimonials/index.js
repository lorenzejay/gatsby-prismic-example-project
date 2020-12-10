import React from "react"
import "./styles.scss"
import RichTextCustom from "../richText"
import styled from "styled-components"

const TestimonialWrapper = styled.section`
  padding: 5%;
`
const TestimonialCard = styled.div`
  padding: 2%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid #333;
`
const ImageCropper = styled.div`
  width: 75px;
  height: 75px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  img {
    display: inline;
    margin: 0 auto;

    height: 100%;
    width: auto;
  }
`
const TestimonialImgAndQuote = styled.div`
  display: flex;
  gap: 10vw;
  width: 100%;
  flex-direction: row;
  p {
    width: 75%;
    margin: auto 0;
  }
`
const TestimonialAuthorAndLink = styled.div`
  h5 {
    margin: 0;
  }
  p {
    color: grey;
    font-size: 12px;
  }
`

const Testimonials = ({ title, testimonials }) => {
  return (
    <TestimonialWrapper>
      <RichTextCustom render={title.raw} />
      {testimonials.map((item, i) => {
        return (
          <TestimonialCard key={i} index={i}>
            <TestimonialImgAndQuote>
              <ImageCropper>
                <img src={item.author_image.url} alt={"testimonial writer"} />
              </ImageCropper>

              <RichTextCustom render={item.testimonial_content.raw} />
            </TestimonialImgAndQuote>
            <TestimonialAuthorAndLink>
              <RichTextCustom render={item.testimonial_author.raw} />
              <p>{item.author_job}</p>
            </TestimonialAuthorAndLink>
          </TestimonialCard>
        )
      })}
    </TestimonialWrapper>
  )
}

export default Testimonials
