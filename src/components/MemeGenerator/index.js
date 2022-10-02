import {Component} from 'react'
import {Container, Heading} from './styledComponents'

import './index.css'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSizeOptionId: fontSizesOptionsList[0].optionId,
    isGenerated: false,
  }

  onChangeImage = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFont = event => {
    console.log(event.target.value)
    this.setState({fontSizeOptionId: event.target.value})
  }

  onClickGenerate = () => {
    this.setState({isGenerated: true})
  }

  render() {
    const {
      imgUrl,
      topText,
      bottomText,
      fontSizeOptionId,
      isGenerated,
    } = this.state
    console.log(isGenerated)

    return (
      <div className="bg-container">
        <form className="meme-container">
          <h1 className="meme-heading">Meme Generator</h1>
          <div className="input-container">
            <label className="input-label" htmlFor="imageId">
              Image URL
            </label>
            <input
              type="text"
              className="input"
              id="imageId"
              placeholder="Enter the image URL"
              value={imgUrl}
              onChange={this.onChangeImage}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="topId">
              Top Text
            </label>
            <input
              type="text"
              className="input"
              id="topId"
              placeholder="Enter the Top Text"
              value={topText}
              onChange={this.onChangeTop}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="bottomText">
              Bottom Text
            </label>
            <input
              type="text"
              className="input"
              id="bottomText"
              placeholder="Enter the Bottom Text"
              value={bottomText}
              onChange={this.onChangeBottom}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="fontId">
              Font Size
            </label>
            <select
              name="font-sizes"
              className="input"
              value={fontSizeOptionId}
              onChange={this.onChangeFont}
              id="fontId"
            >
              {fontSizesOptionsList.map(eachOption => (
                <option
                  key={eachOption.optionId}
                  value={eachOption.displayText}
                >
                  {eachOption.displayText}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="generate-btn"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
        </form>
        {isGenerated ? (
          <Container bgImg={imgUrl} data-testid="meme">
            <Heading textSize={fontSizeOptionId}>{topText}</Heading>
            <Heading textSize={fontSizeOptionId}>{bottomText}</Heading>
          </Container>
        ) : null}
      </div>
    )
  }
}

export default MemeGenerator
