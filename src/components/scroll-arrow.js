import React, { Component } from "react";

export default class ScrollArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scrollTop">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.996 511.996">
  <defs/>
  <g fill="#ffffff">
  <path d="M441.154 176.9L261.954 2.419a8.53 8.53 0 00-11.904 0L70.85 176.9a8.503 8.503 0 00-2.586 6.11c0 2.304.939 4.506 2.586 6.11l48.666 47.386a8.512 8.512 0 0011.921-.017l81.894-80.299v347.273a8.536 8.536 0 008.533 8.533h68.267a8.536 8.536 0 008.533-8.533V156.19l81.894 80.299c3.311 3.251 8.61 3.243 11.93.017l48.666-47.386a8.528 8.528 0 000-12.22z"/>
  </g>
</svg> 
           {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              height="37.735"
              width="32.749"
            >
            <g transform="translate(-18.121 -3.364)">
                <rect
                  ry="4.928"
                  y="3.364"
                  x="18.121"
                  height="37.735"
                  width="32.749"
                  fill="green"
                />
                <g transform="translate(-.48 2.134)">
                  <rect
                    ry="4.928"
                    y="1.229"
                    x="18.601"
                    height="37.735"
                    width="32.749"
                    fill="url(#b)"
                  />
                  <g fill="#ececec">
                    <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                    <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                  </g>
                </g>
              </g>
             </svg> */}
          </div>
        )}
      </div>
    );
  }
}