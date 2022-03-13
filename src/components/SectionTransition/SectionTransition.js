import React, { Component } from "react";
import "./SectionTransition.scss";

//ANIMATION
import { TweenLite } from "gsap";
class SectionTransition extends Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    this.myTween = null;
    this.state = {
      mode: "CLOSE",
      _isMounted: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    let newMode;
    if (this.state.mode === "CLOSE") {
      newMode = "OPEN";
    } else {
      newMode = "CLOSE";
    }
    this.setState({
      mode: newMode,
      _isMounted: false,
    });
  }

  componentDidMount() {
    this._isMounted = true;

    const { mode } = this.state;
    const destY = mode === "CLOSE" ? 0 : 1;
    if (this._isMounted) {
      this.myTween = TweenLite.to(this.myElement, 1, {
        opacity: destY,
      });
      this.myTween.eventCallback("onComplete", this.toggle);
    }
  }

  componentWillUnmount() {
    this.myTween.eventCallback("onComplete", null);
  }

  render() {
    return (
      <div
        ref={(div) => (this.myElement = div)}
        className='sectionTransitionBox'>
        <div className='sectionTransition'></div>
      </div>
    );
  }
}
export default SectionTransition;
