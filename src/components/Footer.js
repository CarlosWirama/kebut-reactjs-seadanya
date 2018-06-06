import React from 'react';

export default () => (
  <footer style={Styles.footerContainer} className="row">
  
    <div className="col m4">
      <h6><b>What is Cat Ipsum?</b></h6>
      <p style={Styles.footerParagraph}>
        Cat ipsum dolor sit amet, sit in window and stare oooh, a bird, yum hit you unexpectedly, yet shove bum in owner's face like camera lens. Get video posted to internet for chasing red dot cat mojo so Gate keepers of hell, or claw your carpet in places everyone can see - why hide my amazing artistic clawing skills?. Love you, then bite you.
      </p>
    </div>
  
    <div className="col m4">
      <h6><b>Why do we use it?</b></h6>
      <p style={Styles.footerParagraph}>
        Steal the warm chair right after you get up leave fur on owners clothes my left donut is missing, as is my right. Spend six hours per day washing, but still have a crusty butthole. Gnaw the corn cob plays league of legends sit and stare, and lie in the sink all day, but stand in doorway, unwilling to chose whether to stay in or go out so meow and russian blue. Bleghbleghvomit my furball really tie the room together eat all the power cords.
      </p>
    </div>

    <div className="col m4">
      <h6><b>Where can I get some?</b></h6>
      <a href="http://www.catipsum.com" target="_blank">
        Link
      </a><br/>
      <a href="https://google.com" target="_blank">
        Link
      </a><br/>
      <a href="https://youtube.com" target="_blank">
        Link
      </a><br/>
      <a href="https://instagram.com" target="_blank">
        Link
      </a><br/>
    </div>
  </footer>
)

const Styles = {
  footerContainer: {
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    padding: 20,
  },
  footerParagraph: {
    fontSize: '10pt',
  },
}